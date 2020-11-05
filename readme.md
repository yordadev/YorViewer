# Yorviewer

Yorviewer is a view bot that utilizes proxies and incognito. This was a simple experiment to see how certain websites deal with bot traffic. The bot utilizes puppeteer to open a randomly sized window and then scroll at a randomly selected pace to the bottom of the page, then close the incognito. 

Disclaimer: Check ToS of the website before running bot, this was made for educational purposes only.

## Usage

Fill in the proxies array. If you do not have any proxy servers, you can find free ones here. 

`https://free-proxy-list.net`

If a proxy stops working, the try catch will console.log the bad proxy for you to remove from your array.


```sh
node app.js [link] [number of individual \"users\"]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
