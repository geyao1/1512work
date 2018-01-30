class Img{
	constructor(){
		this.box = document.getElementById('box');
		this.flag = 0;
		this.init();
	}
	init(){
		this.getImg();
		this.createBtn();
	}
	getImg(){
		this.getJson("http://localhost:3333/list")
		.then((result)=>{
			let res = JSON.parse(result);
			this.loadImg(res)
		})
	}
	loadImg(res){
		let arr = [];
		res.map((item,index)=>{
			let cimg = this.createImg(item.url)
			arr.push(cimg);
		})
		Promise.all(arr).then((images)=>{
			let ul = document.createElement('ul');
			images.map((limg)=>{
				let li = document.createElement('li');
				li.append(limg);
				ul.append(li);
				this.box.append(ul);
			})
		})
	}
	createBtn(){
		let btnRight=document.createElement('div');
		let btnLeft=document.createElement('div');
		btnRight.className='btnright';
		btnLeft.className='btnleft';
		btnRight.innerHTML=">";
		btnLeft.innerHTML="<";
		this.box.append(btnRight);
		this.box.append(btnLeft);
		btnRight.addEventListener('click',()=>{
			let lis = document.querySelectorAll('ul li');
			this.flag++;
			if(this.flag>lis.length-1){
				this.flag=0;
			}
			[...lis].map((item,index)=>{
				if(index==this.flag){
					item.style.display='block';
				} else {
					item.style.display='none';
				}
			})
		})
		btnLeft.addEventListener('click',()=>{
			let lis = document.querySelectorAll('ul li');
			this.flag--;
			if(this.flag<0){
				this.flag=4;
			}
			[...lis].map((item,index)=>{
				if(index==this.flag){
					item.style.display='block';
				} else {
					item.style.display='none';
				}
			})
		})
	}
	createImg(url){
		return new Promise((resolve,reject)=>{
			let imgs = new Image();
			imgs.onload = function(){
				resolve(imgs);
			}
			imgs.onerror = function(){
				reject("imgs not find");
			}
			imgs.src = url;
		})
	}
	getJson(url){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest()
			xml.open("GET",url)
			xml.onreadystatechange=function(){
				if(xml.readyState!=4) return;
				if(xml.status===200){
					resolve(xml.responseText)
				}else{
					reject("error")
				}
			}
			xml.send(null)
		})
	}
}
var img = new Img();