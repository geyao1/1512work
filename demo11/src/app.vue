<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import Dialog from "./js/dialog.js"
export default {
	name: "dialog",
	data(){
		return {
			msg:"666"
		}
	},
	mounted(){
		this.goto();
	},
	methods:{
		goto(){
			let dialog = new Dialog();
		}
	}
}
<style>
	*{
	padding: 0;
	margin: 0;
	list-style: none;
}
.wrap{
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	bottom: 0;
	background: rgba(0,0,0,0.5);
}
.dialog{
	width: 300px;
	height:300px;
	background: #fff;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 99;
	border:1px solid #fff;
	border-radius: 5%;
}
.title{
	font-size: 16px;
	font-weight: normal;
	margin-left: 20px;
	line-height: 50px;
	border-bottom: 1px solid #ccc;
}
.delete{
	float: right;
	margin-right: 20px;
	cursor: pointer;;
}
.content{
	padding-left: 20px;
	width: 100%;
	height: 130px;
	padding-top: 20px;
}
.ok{
	float: left;
	margin-left: 20px;
	width: 60px;
	height: 30px;
	margin-top: 20px;
}
.no{
	float: right;
	margin-right: 20px;
	width: 60px;
	height: 30px;
	margin-top: 20px;
}
</style>