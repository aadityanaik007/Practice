import { Component } from 'react'
import ChildTemp from './childTemp';


class Main extends Component {
    constructor(props) {
        super(props);
        this.symbol_list = []
        this.state = {
            ws: null,
            dict_data: []

        };
    }

    // single websocket instance for the own application and constantly trying to reconnect.

    componentDidMount() {
        this.connect();
    }

    timeout = 250; // Initial timeout duration as a class variable

    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        var ws = new WebSocket("wss://dstream.binance.com/stream?streams=btcusd_perp@bookTicker/ethusd_perp@bookTicker/ltcusd_perp@bookTicker");
        let that = this; // cache the this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        ws.onmessage = (event) => {
            const json = JSON.parse(event.data);
            if (json.data['s'] === 'BTCUSD_PERP') {
                // console.log(json.data);
            }
            // console.log(`[message] Data received from server: ${json.data}`);
            try {
                if (json.data) {
                    const { u, s, b, a, B, A } = json.data;
                    const flag = this.symbol_list.includes(s)
                    if (flag) {
                        const temp = { 'TimeStamp': u, 'Symbol': s, 'Ask': a, 'Bid': b, 'BidQty': B, 'AskQty': A }
                       
                        let temp_map = this.state.dict_data.map((item) => {
                            if (item['Symbol'] === temp['Symbol']) {
                                return temp
                            } 
                            else {
                                return item    
                            }
                        })
                        this.setState({
                            dict_data: temp_map
                        });
                        temp_map = []
                    }
                    else {
                        const temp = { 'TimeStamp': u, 'Symbol': s, 'Ask': a, 'Bid': b, 'BidQty': B, 'AskQty': A }
                        // console.log(temp);
                        this.symbol_list.push(temp['Symbol'])
                        // console.log(this.symbol_list)
                        this.setState({
                            dict_data: [...this.state.dict_data, temp]
                        })
                    }
                }
            } catch (err) {
                console.log('err received', err);
            }
        };
        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    };

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };

    componentDidUpdate() {
        // console.log(this.state.dict_data)
        // for (const item of this.state.dict_data) {
        //     if(item['Symbol'] === 'BTCUSD_PERP'){
        //         console.log(item);
        //     }
        // }
    }


    render() {
        return (
            <div className='container'>
                <h1>
                    Binance Symbol Price
                </h1>
                <div className='d-flex flex-column'>
                <ChildTemp dict_data={this.state.dict_data}/>
                </div>
            </div>
        );
    }
}


export default Main