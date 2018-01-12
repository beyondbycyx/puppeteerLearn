const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({
  	  headless: false,
  	  executablePath:'D:\\MySoft\\phantomjs-2.1.1-windows\\pjsTest\\puppeteer\\chrome-win32\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://cn.bing.com');
  await page.screenshot({path: 'bing.png' , fullPage: true});
 
   await browser.close();
})();

