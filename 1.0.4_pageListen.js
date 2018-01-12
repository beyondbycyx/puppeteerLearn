const puppeteer = require('puppeteer');

puppeteer.launch({
		headless: false,
		executablePath: 'D:\\MySoft\\phantomjs-2.1.1-windows\\pjsTest\\puppeteer\\chrome-win32\\chrome.exe'

}).then(async browser => {
  const page = await browser.newPage();
  page.setViewport({width: 1100, height: 700});
  //const watchDog = page.waitForFunction('window.innerWidth < 400');
  download(page);

 //page.setViewport({width: 50, height: 50});
  //await watchDog;
 // await browser.close();
}).catch( async err => {
	console.error(err);
});


async function download(page) {
    await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: './puppeteerDL/'
    });
    await page.goto('http://waiyu.gdcjxy.com/plus/view.php?aid=613');
    await page.click('div.ctn > table > tbody > tr > td:nth-child(2) > a');
}