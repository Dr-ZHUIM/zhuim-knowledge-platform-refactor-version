const path = require("path");
const fs = require("fs");

const target = 'return `commonjs ${localRes.replace(/.*?next[/\\\\]dist/, "next/dist")}`';
const result = 'return `commonjs ${localRes.replace(/.*?next[/\\\\]dist/, "next/dist").replace(/\\\\/g, "/")}`';
const filePath = path.resolve(__dirname, '../node_modules/next/dist/build/handle-externals.js');

const content = fs.readFileSync(filePath,"utf-8");

try{
	fs.writeFileSync(filePath, content.replace(target, result), "utf-8");
	console.log("replace script success!");
}catch(err){
	console.log(err);
}