import*as e from"@wordpress/interactivity";var t={438:e=>{e.exports=import("@wordpress/interactivity-router")}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const i=(n={getElement:()=>e.getElement,store:()=>e.store},l={},o.d(l,n),l);var n,l;function a(){const e=sessionStorage.getItem("queryFilterScrollPosition");null!==e&&(window.scrollTo(0,parseInt(e,10)),sessionStorage.removeItem("queryFilterScrollPosition"))}(0,i.store)("twentybellows/query-filter",{actions:{execute:function*(e){const{ref:t}=(0,i.getElement)(),{baseUrl:r,queryId:n,filterSlug:l,inPlace:s}=function(e){return{baseUrl:e.getAttribute("data-query-filter-base-url"),queryId:e.getAttribute("data-query-filter-id"),filterSlug:e.getAttribute("data-query-filter-slug"),inPlace:e.getAttribute("data-query-in-place")}}(t),u=function(e,t,r){let o=e;return o=o.replace(/\??\&?query-\d+-page=\d+/,""),o.indexOf("?")<0&&(o+="?"),[o,t,r].filter((e=>e)).join("&")}(r,n?`filter_query_id=${n}`:"",t.value?`${l}=${t.value}`:""),c=t.value;yield*function*(e,t){if(sessionStorage.setItem("queryFilterScrollPosition",window.scrollY),!t)return void(window.document.location.href=e);const{actions:r}=yield Promise.resolve().then(o.bind(o,438));yield r.navigate(e),a()}(u,s),"SELECT"===t.tagName?t.value=c:"INPUT"===t.tagName&&"radio"===t.getAttribute("type")&&(t.checked=!0)}}}),window.addEventListener("load",(function(){a()}));