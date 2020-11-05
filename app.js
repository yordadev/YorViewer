const puppeteer = require("puppeteer");

if (process.argv[2] == undefined) {
  console.log("no domain identified.");
  process.exit();
} else if (process.argv[2] == undefined) {
  console.log("run limit not set.");
  process.exit();
}

// https://free-proxy-list.net
const proxies = [
];

const randProxy = () =>
  proxies[Math.floor(Math.random() * (proxies.length - 1))];

const autoScroll = (page) =>
  page.evaluate(
    async () =>
      await new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, Math.floor(Math.random() * (600 - 300 + 1) + 300));
      })
  );

(async () => {
  async function run() {
    const proxy = randProxy();
    try {
      const browser = await puppeteer.launch({
        args: [`--proxy-server=${proxy}`, "--incognito"],
        headless: true,
      });
      const context = await browser.createIncognitoBrowserContext();
      const page = await context.newPage();

      await page.goto(process.argv[2], { waitUntil: "networkidle2" });
      await page.setViewport({
        width: Math.floor(Math.random() * (1499 - 1200 + 1) + 1200),
        height: Math.floor(Math.random() * (805 - 795 + 1) + 795),
      });
      await autoScroll(page);
      await browser.close();
    } catch (error) {
      console.log(proxy);
    }
  }

  let cycle = 1;

  while (cycle <= process.argv[3]) {
    run();
    cycle++;
  }
})();
