#!/usr/bin/env node
import{Command as n}from"commander";import{resolve as r,join as e}from"path";import{copy as t,writeFile as o}from"fs-extra";var i=new n;i.version("0.0.3");var c={pro:function(n){try{var i=r(n),c=e(__dirname,"../templates/root-project"),a=function(r,a){try{var s=Promise.resolve(t(c,i)).then(function(){var r=require("child_process").spawn,t=function(n){try{require(e(n,"package.json"))}catch(n){return{}}}(i),c=r("npx",["lerna","bootstrap"],{stdio:"inherit",cwd:i});return t.name=n,Promise.resolve(o(e(i,"package.json"),JSON.stringify(t,void 0,2))).then(function(){c.on("close",function(){})})})}catch(n){return}return s&&s.then?s.then(void 0,function(){}):s}();return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},pack:function(n){try{var i=require("child_process").spawn,c="@"+(function(){var n;try{n=require(r("package.json"))}catch(r){n={}}return n}().name||"unknown")+"/"+n,a=e(__dirname,"../templates/package"),s=r("packages/"+n),u=function(n,r){try{var u=Promise.resolve(t(a,s)).then(function(){var n=e(s,"package.json"),r=require(n),t=i("npx",["lerna","bootstrap"],{stdio:"inherit"});return r.name=c,Promise.resolve(o(n,JSON.stringify(r,void 0,2))).then(function(){t.on("close",function(){})})})}catch(n){return r(n)}return u&&u.then?u.then(void 0,r):u}(0,function(n){console.log(n)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(n){return Promise.reject(n)}}};!function(n){n.command("g <type> [name]").description("创建文件").action(function(n,r){if(void 0===r&&(r="unknown"),!(n in c)||"function"!=typeof c[n])throw new TypeError("搞出问题了！没有对应模式!!");c[n](r)})}(i),i.version("0.0.3"),i.parse(process.argv);
//# sourceMappingURL=index.module.js.map
