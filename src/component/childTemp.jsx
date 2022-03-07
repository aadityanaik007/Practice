import React from 'react'

const ChildTemp = ({ dict_data }) => {
    return (
        <div>
            {dict_data ? dict_data.map((item) => {
                        return (
                            <div key={item['Symbol']}>
                                <div>
                                    TimeStamp: {item['TimeStamp']}
                                </div>
                                <div>
                                    Symbol: {item['Symbol']}
                                </div>
                                <div>
                                    Bid: {item['Bid']}
                                </div>
                                <div>
                                    Ask: {item['Ask']}
                                </div>
                                <div>
                                    BidQty: {item['BidQty']}
                                </div>
                                <div>
                                    AskQty: {item['AskQty']}
                                </div>
                            </div>
                        );
                    }) : ''
                    }
        </div>
    )
}

export default React.memo(ChildTemp)