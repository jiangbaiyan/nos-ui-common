!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("nos-ui-common",[],t):"object"==typeof exports?exports["nos-ui-common"]=t():e["nos-ui-common"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=15)}([function(e,t,r){"use strict";function n(e){return"[object Array]"===T.call(e)}function o(e){return"[object ArrayBuffer]"===T.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===T.call(e)}function p(e){return"[object File]"===T.call(e)}function d(e){return"[object Blob]"===T.call(e)}function m(e){return"[object Function]"===T.call(e)}function h(e){return f(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=x(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]="object"==typeof e?w({},e):e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function _(e,t,r){return y(t,function(t,n){e[n]=r&&"function"==typeof t?C(t,r):t}),e}var C=r(7),E=r(31),T=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:E,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:b,forEach:y,merge:x,deepMerge:w,extend:_,trim:v}},function(e,t){e.exports=function(e,t,r,n,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):n&&(f=n),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:s,exports:a,options:c}}},function(e,t,r){"use strict";t.a={name:"NosLogin",props:["dialogVisible","params"],methods:{submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("您的信息填写不正确"),!1;Object.assign(t.params,t.form),t.$axios.post("/v1/unified/login",t.params).then(function(e){200===e.data.status?(t.$message.success("登录成功"),t.resetDialog(e.data)):(t.$message.error("登录失败"),t.resetDialog(e.data))})})},resetDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dialogVisible=!1,this.$emit("login-finish",e)}},data:function(){return{form:{email:"",password:""},rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度不能少于6位",trigger:"blur"}]}}}}},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=f[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(i(r.parts[o]));f[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,r,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(m)return h;n.parentNode.removeChild(n)}if(b){var i=d++;n=p||(p=o()),t=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=o(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),g.ssrId&&e.setAttribute(v,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(23),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,m=!1,h=function(){},g=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,o){m=r,g=o||{};var i=c(e,t);return n(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o],a=f[s.id];a.refs--,r.push(a)}t?(i=c(e,t),n(i)):i=[];for(var o=0;o<r.length;o++){var a=r[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete f[a.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){"use strict";t.a={name:"NosRegister"}},function(e,t,r){"use strict";var n=r(29);r.n(n);t.a={name:"Login",props:["url","title","registerUrl"],data:function(){return{loginForm:{email:"",password:""},registerForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showLogin:!1,displayDialog:!1,title:this.title}},created:function(){this.showLogin=!0;var e=this.$cookies.get("unified_token");e&&this.loginWithTolen(e)},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$notify.error({title:"错误",message:"请输入正确的用户名密码",offset:100}),!1;var r={email:t.loginForm.email,password:t.loginForm.password};t.$axios.post(t.url,r).then(function(e){200===e.data.status?(t.$message({type:"success",message:"登录成功"}),e.data.unified_token&&t.$cookies.set("unified_token",e.data.unified_token),t.returnData(e.data)):t.$message({type:"error",message:e.data.msg})})})},registerPage:function(){this.displayDialog=!0},register:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$notify.error({title:"错误",message:"请输入正确的用户名密码",offset:100}),!1;var r={email:t.registerForm.email,password:t.registerForm.password};t.$axios.post(t.registerUrl,r).then(function(e){200===e.data.status?(t.$message({type:"success",message:"注册成功"}),t.returnData(e.data)):t.$message({type:"error",message:e.data.msg})})})},loginWithTolen:function(e){var t=this,r={unified_token:e};this.$axios.post(this.url,r).then(function(e){200===e.data.status?(t.$message({type:"success",message:"登录成功"}),t.returnData(e.data)):t.$message({type:"error",message:e.data.msg})})},returnData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$emit("login-finish",e)}}}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(0);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(0),i=r(37),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?e=r(11):"undefined"!=typeof XMLHttpRequest&&(e=r(11)),e}(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,r(36))},function(e,t,r){"use strict";var n=r(0),o=r(38),i=r(8),s=r(40),a=r(41),u=r(12);e.exports=function(e){return new Promise(function(t,c){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+m)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:n,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,c,i),p=null}},p.onabort=function(){p&&(c(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var h=r(42),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(l,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},function(e,t,r){"use strict";var n=r(39);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(["headers","auth","proxy"],function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(16),o=r(19),i=r(25),s=[n.a,o.a,i.a],a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,NosLogin:n.a,NosRegister:o.a,Login:i.a}},function(e,t,r){"use strict";var n=r(17);n.a.install=function(e){return e.component(n.a.name,n.a)},t.a=n.a},function(e,t,r){"use strict";var n=r(2),o=r(18),i=r(1),s=i(n.a,o.a,!1,null,null,null);t.a=s.exports},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"登录",visible:e.dialogVisible,"before-close":e.resetDialog,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"status-icon":""}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.resetDialog}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("form")}}},[e._v("登录")])],1)],1)},o=[],i={render:n,staticRenderFns:o};t.a=i},function(e,t,r){"use strict";var n=r(20);n.a.install=function(e){return e.component(n.a.name,n.a)},t.a=n.a},function(e,t,r){"use strict";function n(e){r(21)}var o=r(5),i=r(24),s=r(1),a=n,u=s(o.a,i.a,!1,a,"data-v-2eaa02b0",null);t.a=u.exports},function(e,t,r){var n=r(22);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(4)("0e8180db",n,!0,{})},function(e,t,r){t=e.exports=r(3)(!1),t.push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:a,media:u,sourceMap:c};n[s]?n[s].parts.push(f):r.push(n[s]={id:s,parts:[f]})}return r}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],i={render:n,staticRenderFns:o};t.a=i},function(e,t,r){"use strict";var n=r(26);n.a.install=function(e){return e.component(n.a.name,n.a)},t.a=n.a},function(e,t,r){"use strict";function n(e){r(27)}var o=r(6),i=r(47),s=r(1),a=n,u=s(o.a,i.a,!1,a,"data-v-6b6c2bab",null);t.a=u.exports},function(e,t,r){var n=r(28);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(4)("46f070fb",n,!0,{})},function(e,t,r){t=e.exports=r(3)(!1),t.push([e.i,".allcover[data-v-6b6c2bab]{position:absolute;top:0;right:0}.ctt[data-v-6b6c2bab]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-6b6c2bab]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-6b6c2bab]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-6b6c2bab]{background-color:#324057}.manage_tip[data-v-6b6c2bab]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-6b6c2bab]{font-size:34px;color:#000}.form_container[data-v-6b6c2bab]{width:320px;height:210px;position:absolute;top:50%;left:50%;margin-top:-105px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_container .submit_btn[data-v-6b6c2bab]{width:100%;font-size:16px}.tip[data-v-6b6c2bab]{font-size:12px;color:red}.form-fade-enter-active[data-v-6b6c2bab],.form-fade-leave-active[data-v-6b6c2bab]{transition:all 1s}.form-fade-enter[data-v-6b6c2bab],.form-fade-leave-active[data-v-6b6c2bab]{transform:translate3d(0,-50px,0);opacity:0}",""])},function(e,t,r){e.exports=r(30)},function(e,t,r){"use strict";function n(e){var t=new s(e),r=i(s.prototype.request,t);return o.extend(r,s.prototype,t),o.extend(r,t),r}var o=r(0),i=r(7),s=r(32),a=r(13),u=r(10),c=n(u);c.Axios=s,c.create=function(e){return n(a(c.defaults,e))},c.Cancel=r(14),c.CancelToken=r(45),c.isCancel=r(9),c.all=function(e){return Promise.all(e)},c.spread=r(46),e.exports=c,e.exports.default=c},function(e,t){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=r(0),i=r(8),s=r(33),a=r(34),u=r(13);n.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(0);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(0),i=r(35),s=r(9),a=r(10),u=r(43),c=r(44);e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function s(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&a())}function a(){if(!h){var e=o(s);h=!0;for(var t=m.length;t;){for(d=m,m=[];++g<t;)d&&d[g].run();g=-1,t=m.length}d=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];m.push(new u(e,t)),1!==m.length||h||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(12);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(14);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login_page fillcontain"},[r("transition",{attrs:{name:"form-fade",mode:"in-out"}},[r("section",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"form_container"},[r("div",{staticClass:"manage_tip"},[r("p",[e._v(e._s(e.title))])]),e._v(" "),r("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"email"}},[r("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("登录")])],1)],1),e._v(" "),r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:e.registerPage}},[e._v("注册")]),e._v(" "),r("p",{staticClass:"tip"},[e._v("温馨提示：")]),e._v(" "),r("p",{staticClass:"tip"},[e._v("未登录过的新用户，请先点击下方注册按钮进行注册")]),e._v(" "),r("p",{staticClass:"tip"},[e._v("注册过之后请去邮箱激活")]),e._v(" "),r("p",{staticClass:"tip"},[e._v("注册过的用户可凭账号密码登录")])],1)]),e._v(" "),r("div",[r("el-dialog",{attrs:{title:"注册",rules:e.rules,visible:e.displayDialog},on:{"update:visible":function(t){e.displayDialog=t}}},[r("el-form",{ref:"registerForm",attrs:{model:e.registerForm}},[r("el-form-item",{attrs:{label:"email",prop:"email","label-width":"100px"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password","label-width":"100px"}},[r("el-input",{model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.displayDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.register("registerForm")}}},[e._v("确 定")])],1)],1)],1)],1)},o=[],i={render:n,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=nos.js.map