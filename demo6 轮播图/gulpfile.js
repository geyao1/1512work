var gulp = require('gulp');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var path = require('path');
var mock = require('mockjs')
var webserver = require('gulp-webserver');
var getjson = function(req,res,filepath){
	fs.exists(filepath,function(exist){
		if(!exist){
			res.end("error")
			return;
		}
		fs.readFile(filepath,function(err,data){
			if(err) return console.error(err)
			res.end(data);
		})
	})
}
gulp.task('httpServer',function(){
	gulp.src('.')
		.pipe(webserver({
			port:8080,
			livereload:true,
			fallback:'index.html'
		}))
})
gulp.task('mockServer',function(){
	gulp.src('.')
		.pipe(webserver({
			port:3333,
			middleware:function(req,res,next){
				res.writeHead(200,{
					'content-type':'text/json;charset=utf-8',
					'Access-Control-Allow-Origin':'*'
				})
				if(req.method="/list"){
					let arr = [];
					for(var i=0;i<5;i++){
						arr.push(mock.mock({
							"name":"@cname",
							"url":`images/${(i+1)}.jpg`
						}))
					}
					res.end(JSON.stringify(arr))
				}else if (req.url = "/imgs"){
					var Urls = url.parse(req.url);
					var filename = Urls.pathname;
					var filepath = path.join(__dirname,"data",filename + ".json");
					getjson(req,res,filepath)
				}
			}
		}))
})
gulp.task('default',['httpServer','mockServer'])