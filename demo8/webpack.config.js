// const path = require('path');
// module.exports = {
// 	entry:path.join(__dirname,"app.js"),
// 	output:{
// 		path:path.join(__dirname,"dist"),
// 		filename:"[name].js"
// 	}
// }
const path = require("path");
module.exports = {
	entry:path.join(__dirname,"app.js"),
	output:{
		path:path.join(__dirname,"dist"),
		// filename:"bundle.js",
		filename:"[name].js",
	}
}
