from websocket import create_connection
import time
ws = create_connection("wss://dstream.binance.com/stream?streams=btcusd_perp@bookTicker/ethusd_perp@bookTicker/ltcusd_perp")
while True:
    try:
        print(ws.recv())
    except Exception as e:
        print(e)
        time.sleep(5)
    time.sleep(2)