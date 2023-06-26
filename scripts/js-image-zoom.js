!function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t():e.ImageZoom=t()}(this,(function(){return function(e,t){"use strict";var o=t;if(e){var m,n,l,s={sourceImg:{element:null,width:0,height:0,naturalWidth:0,naturalHeight:0},zoomedImgOffset:{vertical:0,horizontal:0},zoomedImg:{element:null,width:0,height:0},zoomLens:{element:null,width:0,height:0}},i=document.createElement("div"),r=document.createElement("div");s.zoomedImgOffset={vertical:o.offset&&o.offset.vertical?o.offset.vertical:0,horizontal:o.offset&&o.offset.horizontal?o.offset.horizontal:0},s.zoomPosition=o.zoomPosition||"right",s.zoomContainer=o.zoomContainer?o.zoomContainer:e;var a={handleEvent:function(e){switch(e.type){case"mousemove":return this.handleMouseMove(e);case"mouseenter":return this.handleMouseEnter(e);case"mouseleave":return this.handleMouseLeave(e);case"scroll":return this.handleScroll(e)}},handleMouseMove:function(e){var t,o,i;l&&(t=h(e.clientX-l.left),o=u(e.clientY-l.top),i="-"+t*m+"px -"+o*n+"px",s.zoomedImg.element.style.backgroundPosition=i,s.zoomLens.element.style.cssText+="transform:translate("+t+"px,"+o+"px);display: block;left:0px;top:0px;")},handleMouseEnter:function(){s.zoomedImg.element.style.display="block",s.zoomLens.element.style.display="block"},handleMouseLeave:function(){s.zoomedImg.element.style.display="none",s.zoomLens.element.style.display="none"},handleScroll:function(){l=d(s.sourceImg.element)}};return z(),s.sourceImg.element.complete?c():s.sourceImg.element.onload=c,{setup:function(){z()},kill:function(){I()},_getInstanceInfo:function(){return{setup:z,kill:I,onSourceImgLoad:c,data:s,options:o}}}}function d(e){if(e){var t=e.getBoundingClientRect();return{left:t.left,top:t.top}}return{left:0,top:0}}function g(e,t,o){var m=function(e,t,o){return e<t?t:e>o?o:e}(e,t,o);return m-t}function h(e){var t,m=s.zoomLens.width/2;return g(e,m,(t=m,o.width-t))}function u(e){var t,m=s.zoomLens.height/2;return g(e,m,(t=m,o.height-t))}function c(){o.height=o.height||s.sourceImg.element.height,s.sourceImg.element.style.height=o.fillContainer?"100%":o.height+"px",o.width=o.width||s.sourceImg.element.width,s.sourceImg.element.style.width=o.fillContainer?"100%":o.width+"px",function(e,t){e.scale?(t.zoomedImg.element.style.width=e.width*e.scale+"px",t.zoomedImg.element.style.height=e.height*e.scale+"px"):e.zoomWidth?(t.zoomedImg.element.style.width=e.zoomWidth+"px",t.zoomedImg.element.style.height=t.sourceImg.element.style.height):(t.zoomedImg.element.style.width="100%",t.zoomedImg.element.style.height="100%")}(o,s),s.sourceImg.naturalWidth=s.sourceImg.element.naturalWidth,s.sourceImg.naturalHeight=s.sourceImg.element.naturalHeight,s.zoomedImg.element.style.backgroundSize=s.sourceImg.naturalWidth+"px "+s.sourceImg.naturalHeight+"px",o.zoomStyle&&(s.zoomedImg.element.style.cssText+=o.zoomStyle),o.zoomLensStyle?s.zoomLens.element.style.cssText+=o.zoomLensStyle:(s.zoomLens.element.style.background="white",s.zoomLens.element.style.opacity="0.4"),m=s.sourceImg.naturalWidth/o.width,n=s.sourceImg.naturalHeight/o.height,l=d(s.sourceImg.element),o.scale?(s.zoomLens.width=o.width/(s.sourceImg.naturalWidth/(o.width*o.scale)),s.zoomLens.height=o.height/(s.sourceImg.naturalHeight/(o.height*o.scale))):o.zoomWidth?(s.zoomLens.width=o.zoomWidth/m,s.zoomLens.height=o.height/n):(s.zoomedImg.element.style.display="block",s.zoomLens.width=s.zoomedImg.element.clientWidth/m,s.zoomLens.height=s.zoomedImg.element.clientHeight/n,s.zoomedImg.element.style.display="none"),s.zoomLens.element.style.position="absolute",s.zoomLens.element.style.width=s.zoomLens.width+"px",s.zoomLens.element.style.height=s.zoomLens.height+"px",s.zoomLens.element.pointerEvents="none"}function z(){if(o.img){var t=document.createElement("img");t.src=o.img,s.sourceImg.element=e.appendChild(t)}else s.sourceImg.element=e.children[0],"IMG"!==s.sourceImg.element.nodeName&&(s.sourceImg.element=s.sourceImg.element.querySelector("img"));switch(o=o||{},e.style.position="relative",s.sourceImg.element.style.width=o.fillContainer?"100%":o.width?o.width+"px":"auto",s.sourceImg.element.style.height=o.fillContainer?"100%":o.height?o.height+"px":"auto",s.zoomLens.element=e.appendChild(r),s.zoomLens.element.style.display="none",s.zoomLens.element.classList.add("js-image-zoom__zoomed-area"),s.zoomedImg.element=s.zoomContainer.appendChild(i),s.zoomedImg.element.classList.add("js-image-zoom__zoomed-image"),s.zoomedImg.element.style.backgroundImage="url('"+s.sourceImg.element.src+"')",s.zoomedImg.element.style.backgroundRepeat="no-repeat",s.zoomedImg.element.style.display="none",s.zoomPosition){case"left":s.zoomedImg.element.style.position="absolute",s.zoomedImg.element.style.top=s.zoomedImgOffset.vertical+"px",s.zoomedImg.element.style.left=s.zoomedImgOffset.horizontal-2*s.zoomedImgOffset.horizontal+"px",s.zoomedImg.element.style.transform="translateX(-100%)";break;case"top":s.zoomedImg.element.style.position="absolute",s.zoomedImg.element.style.top=s.zoomedImgOffset.vertical-2*s.zoomedImgOffset.vertical+"px",s.zoomedImg.element.style.left="calc(50% + "+s.zoomedImgOffset.horizontal+"px)",s.zoomedImg.element.style.transform="translate3d(-50%, -100%, 0)";break;case"bottom":s.zoomedImg.element.style.position="absolute",s.zoomedImg.element.style.bottom=s.zoomedImgOffset.vertical-2*s.zoomedImgOffset.vertical+"px",s.zoomedImg.element.style.left="calc(50% + "+s.zoomedImgOffset.horizontal+"px)",s.zoomedImg.element.style.transform="translate3d(-50%, 100%, 0)";break;case"original":s.zoomedImg.element.style.position="absolute",s.zoomedImg.element.style.top="0px",s.zoomedImg.element.style.left="0px";break;default:s.zoomedImg.element.style.position="absolute",s.zoomedImg.element.style.top=s.zoomedImgOffset.vertical+"px",s.zoomedImg.element.style.right=s.zoomedImgOffset.horizontal-2*s.zoomedImgOffset.horizontal+"px",s.zoomedImg.element.style.transform="translateX(100%)"}return e.addEventListener("mousemove",a,!1),e.addEventListener("mouseenter",a,!1),e.addEventListener("mouseleave",a,!1),s.zoomLens.element.addEventListener("mouseenter",a,!1),s.zoomLens.element.addEventListener("mouseleave",a,!1),window.addEventListener("scroll",a,!1),s}function I(){return e.removeEventListener("mousemove",a,!1),e.removeEventListener("mouseenter",a,!1),e.removeEventListener("mouseleave",a,!1),s.zoomLens.element.removeEventListener("mouseenter",a,!1),s.zoomLens.element.removeEventListener("mouseleave",a,!1),window.removeEventListener("scroll",a,!1),s.zoomLens&&s.zoomedImg&&(e.removeChild(s.zoomLens.element),s.zoomContainer.removeChild(s.zoomedImg.element)),o.img?e.removeChild(s.sourceImg.element):(s.sourceImg.element.style.width="",s.sourceImg.element.style.height=""),s}}}));