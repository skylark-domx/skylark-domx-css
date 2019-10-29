/**
 * skylark-domx-css - The skylark css library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,n=r.require,i="function"==typeof t&&t.amd,s=!i&&"undefined"!=typeof exports;if(!i&&!t){var a={};t=r.define=function(e,r,t){"function"==typeof t?(a[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),n=e.split("/");t.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?t.pop():t.push(n[i]));return t.join("/")}(r,e)}),resolved:!1,exports:null},n(e)):a[e]={factory:null,resolved:!0,exports:t}},n=r.require=function(e){if(!a.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var t=a[e];if(!t.resolved){var i=[];t.deps.forEach(function(e){i.push(n(e))}),t.exports=t.factory.apply(r,i)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-domx-css/css",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder"],function(e,r,t){"use strict";var n,i=document.getElementsByTagName("head")[0],s=0,a={},o={},u=h(),l=o[u],f="cssRules"in l?"cssRules":"rules",d=l.deleteRule||l.removeRule;if(l.insertRule){var c=l.insertRule;n=function(e,r,t){c.call(this,e+"{"+r+"}",t)}}else n=l.addRule;function h(e,n){var a,u={type:"text/css"},l=s++;return(n=n||{}).media&&(u.media=n.media),a=e?t.create("link",r.mixin(u,{rel:"stylesheet",async:!1})):t.createElement("style",u),t.append(i,a),o[l]={id:l,node:a},l}function m(e,t){var n=o[e];return r.isNumber(t)?d.call(n,t):r.each(n[f],function(e,r){if(t===r)return d.call(n,e),!1}),this}function p(e,n){var i,s=o[e];return i=r.isString(n)?n:y(n),t.append(s.node,t.createTextNode(i)),this}function v(e){return e.startsWith("@")}function y(e){var t=function(e,r,t){return e&&(v(e)?t+=1:r=e+" "+r),{name:r,depth:t}},n=function(e,i,s){var a="",o=v(e);if(v(e))r.isString(i)?a=k.SPACE.repeat(s)+e.trim()+' "'+i.trim()+' ";\n':(a+=k.SPACE.repeat(s)+e.trim()+" {\n",a+=n("",i,s+1),a+=k.SPACE.repeat(s)+" }\n");else if(r.isString(i))a=k.SPACE.repeat(s)+e.trim(),a=o?a+' "'+i.trim()+' ";\n':a+": "+i.trim()+";\n";else if(r.isArray(i))for(var u=0;u<i.length;u++)a+=n(e,i[u],s);else{if(e){for(var u in a+=k.SPACE.repeat(s)+e.trim()+" {\n",i){var l=i[u];r.isString(l)&&(a+=n(u,l,s+1))}a+=k.SPACE.repeat(s)+"}\n"}for(var u in i){var l=i[u];if(!r.isString(l)){var f=t(e,u,s);a+=n(f.name,l,f.depth)}}}return a};return n("",e,0)}function k(){return k}return r.mixin(k,{SPACE:"\t",addRules:function(e){return this.addRules(u,e)},addSheetRules:p,createStyleSheet:function(e,r){r||(r={});var t=h(!1,r);e&&p(t,e);return t},deleteSheetRule:m,deleteRule:function(e){return m(u,e),this},insertRule:function(e,r,t){return this.insertSheetRule(u,e,r,t)},insertSheetRule:function(e,r,t,i){if(!r||!t)return-1;var s=o[e];return i=i||s[f].length,n.call(s,r,t,i)},loadStyleSheet:function(e,t,n,i){r.isFunction(t)&&(i=n,n=t,t={});var s=a[e];if(!s){var u=h(!0,t);s=a[e]=o[u],r.mixin(s,{state:0,url:e,deferred:new r.Deferred});var l=s.node;startTime=(new Date).getTime(),l.onload=function(){s.state=1,s.deferred.resolve(s.id)},l.onerror=function(e){s.state=-1,s.deferred.reject(e)},l.href=s.url}(n||i)&&s.deferred.promise.then(n,i);return s.id},removeStyleSheet:function(e){if(e===u)throw new Error("The default stylesheet can not be deleted");var r=o[e];return delete o[e],t.remove(r.node),this},toString:y}),e.attach("domx.css",k)}),e("skylark-domx-css/main",["./css"],function(e){return e}),e("skylark-domx-css",["skylark-domx-css/main"],function(e){return e})}(t),!i){var o=n("skylark-langx/skylark");s?module.exports=o:r.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-css.js.map
