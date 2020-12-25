#!/usr/bin/env node
import{Command as n}from"commander";import{resolve as e,join as r}from"path";import o from"simple-git";import{copy as t,writeFile as i,mkdir as c}from"fs-extra";var a=new n,s=require("child_process").spawn,u={pro:function(n){try{var a=e(n),u=r(__dirname,"../templates/root-project"),m=function(e,m){try{var f=Promise.resolve(t(u,a)).then(function(){var e=function(n){try{return require(r(n,"package.json"))}catch(n){return{}}}(a);return e.name=n,Promise.resolve(i(r(a,"package.json"),JSON.stringify(e,void 0,2))).then(function(){return Promise.resolve(i(r(a,".gitignore"),"\nnode_modules\n.idea\n.vscode\n.DS_Store\nyarn-error.log\n.env\nlerna-debug.log\n*.map\n")).then(function(){return Promise.resolve(c(r(a,"packages"))).then(function(){return Promise.resolve(o().cwd(a).init()).then(function(){s("yarn",["install"],{stdio:"inherit",cwd:a}).on("close",function(){})})})})})})}catch(n){return m(n)}return f&&f.then?f.then(void 0,m):f}(0,function(n){console.log(n)});return Promise.resolve(m&&m.then?m.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},pack:function(n){try{var o=require("child_process").spawn,c="@"+(function(){var n;try{n=require(e("package.json"))}catch(e){n={}}return n}().name||"unknown")+"/"+n,a=r(__dirname,"../templates/package"),s=e("packages/"+n),u=function(n,e){try{var u=Promise.resolve(t(a,s)).then(function(){var n=r(s,"package.json"),e=require(n),t=o("npx",["lerna","bootstrap"],{stdio:"inherit"});return e.name=c,Promise.resolve(i(n,JSON.stringify(e,void 0,2))).then(function(){t.on("close",function(){})})})}catch(n){return e(n)}return u&&u.then?u.then(void 0,e):u}(0,function(n){console.log(n)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(n){return Promise.reject(n)}}};!function(n){n.command("g <type> [name]").description("创建文件").action(function(n,e){if(void 0===e&&(e="unknown"),!(n in u)||"function"!=typeof u[n])throw new TypeError("搞出问题了！没有对应模式!!");u[n](e)})}(a),a.parse(process.argv);
//# sourceMappingURL=index.module.js.map
