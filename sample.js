const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.evaluate(() => {
    const pagename = Array.from(document.querySelectorAll('h1'));
    return pagename.map(pagename => {
        return pagename.textContent;
    });
  });
  console.log(title);
  browser.close();
})();