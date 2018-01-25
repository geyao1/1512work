var tit = ["tit1","tit2","tit3"];
var cont = ["con1","con2","con3"];
class Tab{
	constructor(titles,contents){
		this.titles = titles;
		this.contents = contents;
		this.init();
	}
	//实例化
	init(){
		let tits=this.createTitle();
		let cons=this.createContent();
		document.body.append(tits);
		document.body.append(cons);
		this.addEvent();
	}
	adds(){

	}
	createTitle(){
		let ul = document.createElement('ul');
		ul.className = "tab-title";
		tit.map((item,index,arr) => {
			let li = document.createElement("li");
			li.innerHTML = item;
			ul.append(li);
		})
		return ul;
	}
	createContent(){
		let ol = document.createElement('ol');
		ol.className="tab-content";
		cont.map((item,index,arr)=>{
			let li = document.createElement('li');
			li.innerHTML = item;
			ol.append(li);
		})
		return ol;
	}
	addEvent(){
		let ulis = document.querySelectorAll('ul li');
		let olis = document.querySelectorAll('ol li');
		[...ulis].map((item,index,arr)=>{
			item.addEventListener('click',()=>{
				this.clickTit(item,arr);
				this.changeCon(olis,index)
			});
		})
	}
	clickTit(item,arr){
		[...arr].map((item)=>{
			item.className="";
		})
		item.className="active";
	}
	changeCon(olis,index){
		[...olis].map((item)=>{
			item.style.display="none";
		})
		olis[index].style.display="block";
	}
}
var tab = new Tab();