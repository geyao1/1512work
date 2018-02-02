/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);