// class Tab{
// 	constructor(){
// 		this.init();
// 	}
// 	init(){
// 		this.tabs();
// 	}
// 	tabs(){
// 		let ulis = document.getElementById('ulist').getElementsByTagName('li');
// 		let olis = document.getElementById('olist').getElementsByTagName('li');
// 		[...ulis].forEach(function(item,i,arr){
// 			ulis[i].index = i;
// 			ulis[i].addEventListener('click',()=>{
// 				[...ulis].forEach(function(item,i,arr){
// 					ulis[i].className = "";
// 		            olis[i].style.display = "none";
// 				})
// 			})
// 			this.className = "active";
//             olis[this.index].style.display="block";
// 		})
// 	}
// }
// let tab = new Tab();


let ulis = document.getElementById('ulist').getElementsByTagName('li');
let olis = document.getElementById('olist').getElementsByTagName('li');
for(var i=0 ; i<ulis.length ; i++){
    ulis[i].index = i;
    ulis[i].onclick = function( ){
        for(var i =0; i < ulis.length; i++){
            ulis[i].className = "";
            olis[i].style.display = "none";
        }
        this.className = "active";
        olis[this.index].style.display="block";
    }
}