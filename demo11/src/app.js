import Vue from "vue" 
import App from "./app.vue"
new Vue({
	el:"#app",
	data:{
		msg:"666"
	}
	render: h => h(App)
})