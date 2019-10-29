/**
 * skylark-domx-css - The skylark css library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder"],function(e,t,r){"use strict";var n,i=document.getElementsByTagName("head")[0],a=0,u={},s={},l=h(),d=s[l],o="cssRules"in d?"cssRules":"rules",f=d.deleteRule||d.removeRule;if(d.insertRule){var c=d.insertRule;n=function(e,t,r){c.call(this,e+"{"+t+"}",r)}}else n=d.addRule;function h(e,n){var u,l={type:"text/css"},d=a++;return(n=n||{}).media&&(l.media=n.media),u=e?r.create("link",t.mixin(l,{rel:"stylesheet",async:!1})):r.createElement("style",l),r.append(i,u),s[d]={id:d,node:u},d}function m(e,r){var n=s[e];return t.isNumber(r)?f.call(n,r):t.each(n[o],function(e,t){if(r===t)return f.call(n,e),!1}),this}function S(e,n){var i,a=s[e];return i=t.isString(n)?n:R(n),r.append(a.node,r.createTextNode(i)),this}function v(e){return e.startsWith("@")}function R(e){var r=function(e,t,r){return e&&(v(e)?r+=1:t=e+" "+t),{name:t,depth:r}},n=function(e,i,a){var u="",s=v(e);if(v(e))t.isString(i)?u=g.SPACE.repeat(a)+e.trim()+' "'+i.trim()+' ";\n':(u+=g.SPACE.repeat(a)+e.trim()+" {\n",u+=n("",i,a+1),u+=g.SPACE.repeat(a)+" }\n");else if(t.isString(i))u=g.SPACE.repeat(a)+e.trim(),u=s?u+' "'+i.trim()+' ";\n':u+": "+i.trim()+";\n";else if(t.isArray(i))for(var l=0;l<i.length;l++)u+=n(e,i[l],a);else{if(e){for(var l in u+=g.SPACE.repeat(a)+e.trim()+" {\n",i){var d=i[l];t.isString(d)&&(u+=n(l,d,a+1))}u+=g.SPACE.repeat(a)+"}\n"}for(var l in i){d=i[l];if(!t.isString(d)){var o=r(e,l,a);u+=n(o.name,d,o.depth)}}}return u};return n("",e,0)}function g(){return g}return t.mixin(g,{SPACE:"\t",addRules:function(e){return this.addRules(l,e)},addSheetRules:S,createStyleSheet:function(e,t){t||(t={});var r=h(!1,t);return e&&S(r,e),r},deleteSheetRule:m,deleteRule:function(e){return m(l,e),this},insertRule:function(e,t,r){return this.insertSheetRule(l,e,t,r)},insertSheetRule:function(e,t,r,i){if(!t||!r)return-1;var a=s[e];return i=i||a[o].length,n.call(a,t,r,i)},loadStyleSheet:function(e,r,n,i){t.isFunction(r)&&(i=n,n=r,r={});var a=u[e];if(!a){var l=h(!0,r);a=u[e]=s[l],t.mixin(a,{state:0,url:e,deferred:new t.Deferred});var d=a.node;startTime=(new Date).getTime(),d.onload=function(){a.state=1,a.deferred.resolve(a.id)},d.onerror=function(e){a.state=-1,a.deferred.reject(e)},d.href=a.url}return(n||i)&&a.deferred.promise.then(n,i),a.id},removeStyleSheet:function(e){if(e===l)throw new Error("The default stylesheet can not be deleted");var t=s[e];return delete s[e],r.remove(t.node),this},toString:R}),e.attach("domx.css",g)});
//# sourceMappingURL=sourcemaps/css.js.map
