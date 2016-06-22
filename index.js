require('babel-register')({
   presets: [ 'es2015' ]
});

var module = require("./highlight.js");

var resultString = "Hello world, how do you do",
	searchString = "llo hel orld world do",
	nl = "\r\n"

console.log("Result string: " + resultString + nl);
console.log("Search string: " + searchString + nl);
console.log("Highlighted result: " + module.highlight(resultString, searchString) + nl)