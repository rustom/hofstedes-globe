(self.webpackChunkhofstede_globe=self.webpackChunkhofstede_globe||[]).push([[231],{7231:function(){!function(){"use strict";if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=t?parseInt(t[1],10):null,i=!!e&&16<=e&&e<=18;if("objectFit"in document.documentElement.style==0||i){var n=function(t,e,i){var n,o,l,a,d;if((i=i.split(" ")).length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight}if(n!==l&&o!==l){if(n!==a&&o!==a)return"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):void(0<=n.indexOf("%")?(n=parseInt(n,10))<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"):e.style[l]=n);e.style[a]="0"}else e.style[l]="0"},o=function(t){var e=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),i=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");e=e||"cover",i=i||"50% 50%";var o=t.parentNode;return function(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")}(o),function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i)e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n])}(t),t.style.position="absolute",t.style.width="auto",t.style.height="auto","scale-down"===e&&(e=t.clientWidth<o.clientWidth&&t.clientHeight<o.clientHeight?"none":"contain"),"none"===e?(n("x",t,i),void n("y",t,i)):"fill"===e?(t.style.width="100%",t.style.height="100%",n("x",t,i),void n("y",t,i)):(t.style.height="100%",void("cover"===e&&t.clientWidth>o.clientWidth||"contain"===e&&t.clientWidth<o.clientWidth?(t.style.top="0",t.style.marginTop="0",n("x",t,i)):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",n("y",t,i))))},l=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(var e=0;e<t.length;e++)if(t[e].nodeName){var n=t[e].nodeName.toLowerCase();if("img"===n){if(i)continue;t[e].complete?o(t[e]):t[e].addEventListener("load",(function(){o(this)}))}else"video"===n?0<t[e].readyState?o(t[e]):t[e].addEventListener("loadedmetadata",(function(){o(this)})):o(t[e])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",l):l(),window.addEventListener("resize",l),window.objectFitPolyfill=l}else window.objectFitPolyfill=function(){return!1}}}()}}]);
//# sourceMappingURL=231-86de5daf9b189fe47ebd.js.map