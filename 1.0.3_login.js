
//https://mail.qq.com//cgi-bin/download?sid=nqxkOClH-QNbcFYM&mailid=ZL0726-w_FUKjv4PsCBZUMZYd7nP7c
const pp = require('puppeteer');



const un = '654184754';
const pwd = 'qq13124940497';

//登录页面
var pro = getFileUrls('https://mail.qq.com/cgi-bin/loginpage',un,pwd);

async function download(page) {
    await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: './'
    });
    await page.goto(DOWNLOAD_URL);
    await page.click(DOWNLOAD_BUTTON_SELECTOR);
}


async function getFileUrls(loginUrl,un,pwd,op){
	const b =  await pp.launch({
		headless: false,
		devtools: true,
		executablePath: 'D:\\MySoft\\phantomjs-2.1.1-windows\\pjsTest\\puppeteer\\chrome-win32\\chrome.exe'
	});
	
	//监听事件
	b.on('targetchanged',t=>{
		//console.log('t:'+t.url());
		const tp =  t.page();
		if(tp){

 			tp.then(page =>{

 				console.log('tp.page.url:'+page.url());
 				page.evaluate(()=>{
 					console.log(location.href);
 					//console.log(document.querySelector('#pp'));
 				});
 			});
		}

	});

	const p =  await b.newPage();
	await p.setViewport({

		width: 1100,
		height: 800
	});

	await p.goto(loginUrl);
	
	const f = await p.mainFrame().childFrames()[0];
	f.evaluate( (u,p)=>{

		console.log(document.querySelector('#switcher_plogin'));
		document.querySelector('#switcher_plogin').click();

		//输入帐号密码
		document.querySelector('#u').value = u;
		document.querySelector('#p').value = p;
		setInterval(()=>{
		console.log('click login');		
 
		document.querySelector('#login_button').click();
		},3000);

	},un,pwd);

	 

}

 
