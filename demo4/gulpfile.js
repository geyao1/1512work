var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mock = require('mockjs');
var getjson = function(req,res,filepath){
	fs.exists(filepath,function(exist){
		if(!exist){
			res.end("error");
			return;
		}
		fs.readFile(filepath,function(err,data){
			if(err) return console.error(err);
			res.end(data);
		})
	})
}
gulp.task('httpServer',function(){
	gulp.src('.')
		.pipe(webserver({
			port:8080,
			livereload:true,
			fallback:"index.html"
		}))
})
gulp.task('server',function(){
	gulp.src('.')
		.pipe(webserver({
			port:3333,
			middleware:function(req,res,next){
				res.writeHead(200,{
						"content-type":"text/json;charset=utf-8",
						"Access-Control-Allow-Origin":"*"
					})
					if(req.url="/mock"){
						let arr = [];
						for(var i = 0; i<5;i++){
							arr.push(mock.mock({
								"name":"@cname",
								"url":`img/${(i+1)}.jpg`,
							}))
						}
						res.end(JSON.stringify(arr));
					} else if (req.url = "/imgs"){
						var Urls = url.parse(req.url);
						var filename = Urls.pathname;
						var filepath = path.join(__dirname,"data",filename + ".json");
						getjson(req,res,filepath)
					}
				}
			}))
})
console.log(getjson)
gulp.task('default',["httpServer","server"])