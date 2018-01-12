
//1. async 用于函数，则包装该函数为promise,用于方法代码行，则只能用于基于promise 的方法
// https://blog.fundebug.com/2017/04/04/nodejs-async-await/
async function get(str){
 	
 	var a = await 1+1;
 	console.log(a);
	return a;
}
get('hugo i am ');