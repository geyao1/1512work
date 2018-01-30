const config ={
	page:1
}
class AsyncLoadImg{
	constructor(options){
		Object.assign(config,options)
		this.box = document.getElementById(config.id);
		this.page = config.page;
		this.flag = config.flag;
		this.imgs = null;
		this.init();
	}
	init(){
		this.getImg();
	}
	getImg(){
		this.getjson("http://localhost:3333/mock")
		.then((result)=>{
			let res = JSON.parse(result);
			let img = [];
			this.imgs = res;
			if(this.flag == true){
				res.map((item,index)=>{
					if(index>this.page-1 ) return;
					img.push(item);
					this.loadImg(img)
				})
			}else{
				this.loadImg(res);
			}
		})
	}
	loadImg(img){
		img.map((item,index)=>{
			this.createImg(item.url);
		})
	}
	createImg(path){
		return new Promise((resolve,reject) => {
			let Imgs = new Image();
			Imgs.onload = function(){
				resolve(Imgs);
			}
			Imgs.onerror = function(){
				reject("can't find img");
			}
			Imgs.src = path;
			this.box.append(Imgs);
		})
	}
	getjson(url){
		return new Promise((resolve,reject) =>{
			let xml = new XMLHttpRequest();
			xml.open('GET',url);
			xml.onreadystatechange=function(){
				if(xml.readyState!==4) return;
				if(xml.status==200){
					resolve(xml.responseText)
				}else{
					reject("error")
				}
			}
			xml.send(null)
		})
	}
}