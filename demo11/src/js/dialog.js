class Dialog{
	constructor(title="标题",content="好好学习，天天向上"){
		this.title = title;
		this.content = content;
		this.init();
	}
	init(){
		this.createWrap();
	}
	addEvent(){
		let span = document.querySelectorAll("span")[0];
		span.addEventListener('click',() => {
			this.hide();
		})
		let no = document.querySelectorAll(".no")[0];
		no.addEventListener('click',() => {
			this.hide();
		})
	}
	hide(){
		let wrap = document.querySelectorAll('.wrap')[0];
		let dialog = document.querySelectorAll('.dialog')[0];
		wrap.style.display = "none";
		dialog.style.display = "none";
	}
	createTitle(){
		let h1 = document.createElement("h1");
		let span = document.createElement("span");
		h1.className="title";
		span.className="delete";
		h1.innerHTML=this.title;
		span.innerHTML="X";
		h1.append(span);
		return h1;
	}
	createBtn(txt,cla){
		let btn = document.createElement("button");
		btn.innerHTML = txt;
        btn.className = cla;
        return btn;
	}
	createContent(){
		let p = document.createElement("p");
		p.className = "content";
		p.innerHTML = this.content;
		return p;
	}
	createDialog(){
		let dial = document.createElement("div");
		dial.className="dialog";
		document.body.append(dial);
		let tit = this.createTitle();
		let content = this.createContent();
		let btnOK = this.createBtn('确定',"ok");
		let btnNO = this.createBtn('取消',"no");
		dial.append(tit);
		dial.append(content);
		dial.append(btnOK);
		dial.append(btnNO);
		this.addEvent();
	}
	createWrap(){
		let wrap = document.createElement("div");
		let dia = this.createDialog();
		document.body.append(wrap);
		wrap.className='wrap';
	}
}
export default Dialog;