;(self.SPZ=self.SPZ||[]).push({n:"spz-carousel",ev:"0.1",l:!0,v:"1.0",m:0,f:function(t,i){!function(){var i;function n(){return i||(i=Promise.resolve(void 0))}function e(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}function s(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(i){o(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}function o(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var r="i-spzhtml-slide-item-show",l={pre:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 18 18"><path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>',close:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#6F6F6F" fill-opacity="0.7"/><path d="M13.1211 11.9896C13.0039 11.8724 12.814 11.8724 12.6968 11.9896L11.9897 12.6967C11.8726 12.8139 11.8726 13.0038 11.9897 13.121L16.8688 18L11.9897 22.8791C11.8726 22.9962 11.8726 23.1862 11.9897 23.3033L12.6968 24.0104C12.814 24.1276 13.0039 24.1276 13.1211 24.0104L18.0001 19.1314L22.8792 24.0104C22.9963 24.1276 23.1863 24.1276 23.3033 24.0104L24.0105 23.3033C24.1277 23.1861 24.1277 22.9962 24.0105 22.879L19.1315 18L24.0105 13.121C24.1277 13.0038 24.1277 12.8139 24.0105 12.6967L23.3035 11.9896C23.1863 11.8725 22.9963 11.8725 22.8792 11.9896L18.0001 16.8687L13.1211 11.9896Z" fill="white"/></svg>'};function h(t,i){var n=i.className,e=i.enabled,s=i.outerHTML,o=t.ownerDocument.createElement("div");return o.setAttribute("tabindex","0"),o.classList.add("spz-carousel-button",n),o.setAttribute("role","button"),u(o,e),o.innerHTML=s,t.appendChild(o),o}function u(t,i){t.classList.toggle("spz-disabled",!i),t.setAttribute("aria-disabled",String(!i)),t.setAttribute("tabindex",String(i?0:-1))}function a(t,i){var n=SPZCore.Dom.scopedQuerySelector(t,"> [".concat(i,"]"));return n?(SPZCore.Dom.toggle(n,!0),t.removeChild(n).outerHTML):l[i]}function c(t){return SPZCore.Dom.realChildElements(t).filter((function(t){return!(t.hasAttribute("pre")||t.hasAttribute("next")||t.hasAttribute("close"))}))}var f=function(){function t(i){var n=i.element,e=i.go,s=i.nextButton,o=i.prevButton;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.element_=n,this.go_=e,this.win_=n.ownerDocument.defaultView,this.prevButton_=o,this.nextButton_=s,this.showControls_=!1,this.setupBehaviors_()}var i;return(i=[{key:"setupBehaviors_",value:function(){var t=this;this.setupButtonInteraction(this.prevButton_,(function(){return t.handlePrev()})),this.setupButtonInteraction(this.nextButton_,(function(){return t.handleNext()})),this.element_.hasAttribute("controls")&&(this.showControls_=!0)}},{key:"setupButtonInteraction",value:function(t,i){t.addEventListener("click",(function(t){t.stopPropagation(),i()}))}},{key:"setControlsState",value:function(t){var i=t.next,n=t.prev;u(this.prevButton_,n),u(this.nextButton_,i)}},{key:"hintControls",value:function(){var t=this;this.showControls_||SPZServices.vsyncFor(this.win_).mutate((function(){var i="i-spzhtml-carousel-button-start-hint";t.element_.classList.add(i),SPZServices.timerFor(t.win_).delay((function(){SPZServices.mutatorForDoc(t.element_).measureMutateElement(t.element_,null,(function(){t.element_.classList.remove(i),SPZCore.Dom.toggleAttribute(t.element_,"i-spzhtml-carousel-hide-buttons",!t.showControls_)}))}),4e3)}))}},{key:"handlePrev",value:function(){!this.prevButton_.classList.contains("spz-disabled")&&this.go_(-1,!0,!1)}},{key:"handleNext",value:function(){!this.nextButton_.classList.contains("spz-disabled")&&this.go_(1,!0,!1)}}])&&function(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(t.prototype,i),t}();var v=function(){function t(i,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i.container,s=i.left,o=i.right;this.container_=e,this.documentElement_=n.document.documentElement,this.start_=void 0,this.end_=void 0,this.left_=s,this.right_=o,this.setup_()}var i;return(i=[{key:"setup_",value:function(){var t=this;["touchstart","mousedown"].forEach((function(i){SPZUtils.Event.listen(t.container_,i,t.touchStart_.bind(t),{passive:!0})})),["mouseup","mouseleave","touchend"].forEach((function(i){SPZUtils.Event.listen(t.container_,i,t.touchEnd_.bind(t),{passive:!0})})),this.cancelTouchEvents_()}},{key:"touchStart_",value:function(t){var i=t.clientX?t:t.changedTouches[0],n=i.clientX,e=i.clientY;this.start_={clientX:n,clientY:e},this.documentElement_.classList.add("i-spzhtml-carousel-scroll-disabled")}},{key:"touchEnd_",value:function(t){var i=t.clientX?t:t.changedTouches[0],n=i.clientX,e=i.clientY;this.end_={clientX:n,clientY:e},this.calcAndCallback_(),this.documentElement_.classList.remove("i-spzhtml-carousel-scroll-disabled")}},{key:"calcAndCallback_",value:function(){if(this.start_&&this.end_&&!this.isZoom_){var t=this.end_.clientX-this.start_.clientX;this.end_.clientY,this.end_.clientY,t>50&&this.right_&&this.right_(),t<-50&&this.left_&&this.left_(),this.start_=this.end_=void 0}}},{key:"cancelTouchEvents_",value:function(){var t=this;SPZUtils.Event.listen(this.container_,"touchmove",(function(i){var n;t.isZoom_=(null===(n=i.touches)||void 0===n?void 0:n.length)>1,i.stopPropagation()}),{passive:!0})}}])&&function(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(t.prototype,i),t}();var p=["spz-video"],d=function(){function i(t){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i);var n=t.action,e=t.calcControlPosition,s=t.element,o=t.viewport;this.action_=n,this.viewport_=o,this.zoomElement_=s,this.calcControlPosition_=e,this.setup_()}var n;return(n=[{key:"setup_",value:function(){this.zoomElement_&&this.zoomElement_.hasAttribute("slidezoom")&&(this.closeSvg=a(this.zoomElement_,"close"),SPZUtils.Event.listen(this.zoomElement_,"click",this.open_.bind(this)))}},{key:"open_",value:function(t){this.zoomElement_.hasAttribute("zoom-in")||(this.setImgAutoFit_(t.target),this.action_.trigger(this.zoomElement_,"zoomIn"),SPZCore.Dom.toggleAttribute(this.zoomElement_,"zoom-in",!0),this.renderCloseBtn_(),this.zoom_(),this.viewport_.enterOverlayMode(),this.calcControlPosition_())}},{key:"close_",value:function(){SPZCore.Dom.toggleAttribute(this.zoomElement_,"zoom-in",!1),this.unListenClose_&&this.unListenClose_(),this.zoomElement_.removeChild(this.closeEle_),this.handleChildZoomCallback(!1),this.viewport_.leaveOverlayMode(),this.calcControlPosition_()}},{key:"zoom_",value:function(){this.handleChildZoomCallback(!0)}},{key:"renderCloseBtn_",value:function(){var t=this;this.closeEle_=document.createElement("div"),this.closeEle_.classList.add("close"),this.closeEle_.innerHTML=this.closeSvg,this.zoomElement_.appendChild(this.closeEle_),this.unListenClose_=SPZUtils.Event.listen(this.closeEle_,"click",(function(i){i.preventDefault(),i.stopPropagation(),t.close_(),t.action_.trigger(t.zoomElement_,"zoomOut")}))}},{key:"handleChildZoomCallback",value:function(){var i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];SPZCore.Dom.scopedQuerySelectorAll(this.zoomElement_,p.join(",")).forEach((function(n){t.whenApiDefined(n).then((function(t){t.onEnterFullscreenCallback&&t.onEnterFullscreenCallback(i)}))}))}},{key:"setImgAutoFit_",value:function(t){var i=t.parentElement;"SPZ-IMG"===i.tagName&&i.getApi((function(){return api.setSrc&&api.setSrc()}))}}])&&function(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(i.prototype,n),i}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,i){if(t){if("string"==typeof t)return b(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,i):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}function z(t,i){return(z=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function S(t,i){return!i||"object"!==m(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k="spz-carousel",P=void 0,g=function(i){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&z(t,i)}(p,i);var e,o,l,u=(o=p,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=x(o);if(l){var n=x(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return S(this,t)});function p(t){var i;return function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,p),(i=u.call(this,t)).slides_=[],i.noOfSlides_=0,i.slidesContainer_=null,i.slideWrappers_=[],i.autoplayTimeoutId_=null,i.hasAutoplay_=!1,i.autoplayDelay_=5e3,i.shouldLoop_=!1,i.shouldAutoplay_=!1,i.slideIndex_=null,i.initialSlideIndex_=0,i.action_=SPZServices.actionServiceForDoc(i.element),i.controls_=null,i.viewport_=i.getViewport(),i}return(e=[{key:"isLayoutSupported",value:function(){return!0}},{key:"buildCallback",value:function(){var t=this;this.templates_=SPZServices.templatesForDoc(this.element),this.registerAction("updateCount",(function(i){var n,e;return t.updateCount_(null===(n=i.args)||void 0===n?void 0:n.count,null===(e=i.args)||void 0===e?void 0:e.isZoom)})),this.registerAction("updateVisible",(function(i){var n,e;return t.updateVisible_(null===(n=i.args)||void 0===n?void 0:n.count,null===(e=i.args)||void 0===e?void 0:e.isZoom)})),this.registerAction("updateDirect",(function(i){var n;t.isVertical_="vertical"===(null===(n=i.args)||void 0===n?void 0:n.direct),t.element.setAttribute("direct",t.isVertical_?"vertical":""),t.handleShowSlide_(t.slideIndex_,!1),t.isVertical_?t.slidesContainer_.scrollTop=t.getSum_(0,t.slideIndex_):t.slidesContainer_.scrollTop=0})),this.animateTime_=this.element.getAttribute("animate-time")}},{key:"mountCallback",value:function(){return this.init_(),this.initSlide_(),n()}},{key:"unmountCallback",value:function(){this.clearAutoplayTimer_()}},{key:"init_",value:function(){this.initDom_(),this.advanceCount_=Number(this.element.getAttribute("advance-count"))||1,this.visibleCount_=Math.round(this.element.getAttribute("visible-count"),10)||1,this.hasLoop_=this.element.hasAttribute("loop"),this.shouldLoop_=this.hasLoop_&&this.isLoopingEligible(),this.hasAutoplay_=this.element.hasAttribute("autoplay"),this.shouldAutoplay_=this.hasAutoplay_&&this.isLoopingEligible();var t=this.element.getAttribute("visible-count");if(this.isAdvanceCount_=1!==this.visibleCount_&&parseInt(t,10)<parseFloat(t),this.element.hasAttribute("initial-slide")){var i=this.assert(this.element.getAttribute("initial-slide"),"Given slide-index should not be empty.");this.initialSlideIndex_=isNaN(i)?this.findSlideIndex_(i,!0):parseInt(i,10)}this.isVertical_="vertical"===this.element.getAttribute("direct"),this.max_=Math.ceil(this.slides_.length/this.advanceCount_),this.setupBehavior_()}},{key:"initDom_",value:function(){var t,i,n,e=this,o=(i=c(t=this.element).length,n=function(t){var i,n=t.ownerDocument,e=c(t);t.classList.add("i-spzhtml-slidescroll");var s=n.createElement("div");s.setAttribute("tabindex","-1"),s.classList.add("i-spzhtml-slides-container"),s.setAttribute("aria-live","polite"),t.appendChild(s);var o=[];return e.forEach((function(t){t.classList.add("spz-carousel-slide");var i=n.createElement("div");i.classList.add("i-spzhtml-slide-item"),i.appendChild(t),s.appendChild(i),o.push(i)})),null===(i=o[0])||void 0===i||i.classList.add(r),{slidesContainer:s,slides:e,slideWrappers:o}}(t),s(s({},function(t,i){return t.hasAttribute("controls")&&t.classList.add("i-spzhtml-carousel-has-controls"),{prevButton:h(t,{outerHTML:a(t,"pre"),className:"spz-carousel-button-prev",enabled:t.hasAttribute("loop")}),nextButton:h(t,{outerHTML:a(t,"next"),className:"spz-carousel-button-next",enabled:i>1})}}(t,i)),n)),l=o.nextButton,u=o.prevButton,v=o.slideWrappers,p=o.slides,m=o.slidesContainer;this.slides_=p,this.slidesContainer_=m,this.slideWrappers_=v,this.prevButton_=u,this.nextButton_=l,this.controls_=new f({element:this.element,go:this.go.bind(this),nextButton:l,prevButton:u}),this.zoom_=new d({element:this.element,action:this.action_,viewport:this.viewport_,calcControlPosition:function(){return e.attemptToFit_()}}),this.noOfSlides_=this.slides_.length}},{key:"initSlide_",value:function(){null===this.slideIndex_&&(this.showSlide_(this.initialSlideIndex_,!1),this.setMaxHeight_()),this.triggerActionByName_("mounted",this.slideIndex_)}},{key:"setupBehavior_",value:function(){var t=this;this.shouldAutoplay_&&this.setupAutoplay_(),this.gesture_=new v({container:this.slidesContainer_,left:function(){t.clearAutoplayTimer_(),t.moveSlide(1,!0)},right:function(){t.clearAutoplayTimer_(),t.moveSlide(-1,!0)}},this.win),this.registerAction("goToSlide",this.handleSlide_.bind(this))}},{key:"handleSlide_",value:function(t){var i=this,n=t.args,e=n.path,s=n.animate,o=n.direct;s&&!o&&(o=(n.index||0)<this.slideIndex_?-1:1),e?this.findSlideIndex_(e).then((function(t){s&&!o&&(o=(t||0)<i.slideIndex_?-1:1),i.goToSlide(t||0,s,o)})):this.goToSlide(n.index||0,s,o)}},{key:"findSlideIndex_",value:function(i){var n=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=i.lastIndexOf(".");s>-1&&(i=i.substring(0,s));var o=function(){return n.slides_.findIndex((function(t){var n=(null==t?void 0:t.getAttribute("poster"))||(null==t?void 0:t.getAttribute("src"));if("SPZ-IMG"!==t.tagName&&"SPZ-VIDEO"!==t.tagName){var e,s,o=SPZCore.Dom.scopedQuerySelector(t,"spz-img");o||(o=SPZCore.Dom.scopedQuerySelector(t,"spz-video")),n=(null===(e=o)||void 0===e?void 0:e.getAttribute("poster"))||(null===(s=o)||void 0===s?void 0:s.getAttribute("src"))}return n&&-1!==n.lastIndexOf(i)}))};return e?o():t.whenDefined(this.element).then((function(){return n.element.whenBuilt().then((function(){return o()}))}))}},{key:"isLoopingEligible",value:function(){return this.noOfSlides_>1}},{key:"interactionNext",value:function(){this.controls_.handleNext()}},{key:"interactionPrev",value:function(){this.controls_.handlePrev()}},{key:"go",value:function(t,i,n){this.moveSlide(t,i),n?this.autoplay_():this.clearAutoplayTimer_()}},{key:"hasPrev_",value:function(){return this.shouldLoop_||this.slideIndex_>0}},{key:"hasNext_",value:function(){return this.shouldLoop_||(this.slideIndex_+1)*this.advanceCount_<this.slides_.length}},{key:"moveSlide",value:function(t,i){if(null!==this.slideIndex_){var n=1===t?this.getNextIndex_(this.slideIndex_):this.getPrevIndex_(this.slideIndex_);null!==n&&this.showSlideAndTriggerAction_(n,i,t)}}},{key:"goToSlide",value:function(t,i,n){var e=parseInt(t,10);e!==this.max_-1&&this.slidesContainer_.scrollLeft&&(this.slidesContainer_.scrollLeft=0),!isFinite(e)||e<0||e>=this.noOfSlides_?this.logger().error(k,"Invalid [slide] value: ",t):null!==this.slideIndex_?this.showSlideAndTriggerAction_(e,i,n):this.initialSlideIndex_=e}},{key:"getPrevIndex_",value:function(t){return t-1>=0?t-1:this.shouldLoop_?this.max_-1:null}},{key:"getNextIndex_",value:function(t){return t+1<this.max_?t+1:this.shouldLoop_?0:null}},{key:"showSlide_",value:function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P,e=this.noOfSlides_;return!(t<0||t>=e||this.slideIndex_==t||this.showProcessing_)&&this.handleShowSlide_(t,i,n)}},{key:"handleShowSlide_",value:function(t,i){var n=this,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P,s=this.slides_[t];if(void 0===s)return this.logger().error(k,"Attempting to access a non-existant slide %s / %s",t,noOfSlides_),!1;if(this.showProcessing_=!0,!this.element.hasAttribute("slide")&&e&&i){var o=this.max_-1-this.advanceCount_;this.isVertical_?(t!==this.max_-1&&t!==o&&this.slideWrappers_.slice(0,o).forEach((function(t){t.classList.remove("spz-carousel-hide")})),this.showScollSlide_(t,e).then((function(){n.triggerActionByName_("slideEnd",t),n.showProcessing_=!1,n.attemptToFit_()}))):(this.slideWrappers_.forEach((function(t){t.classList.remove("spz-carousel-hide")})),this.showScollSlide_(t,e).then((function(){n.triggerActionByName_("slideEnd",t),n.showProcessing_=!1,n.attemptToFit_()})))}else{var r=this.max_-1-this.advanceCount_;this.isVertical_?(t!==this.max_-1&&t!==r&&this.slideWrappers_.slice(0,r).forEach((function(t){t.classList.remove("spz-carousel-hide")})),this.showTargetSlide_(t,i,e).then((function(){n.isVertical_&&(n.slidesContainer_.scrollTop=n.getSum_(0,t),t===n.max_-1||t===r?(n.lastTop=n.slidesContainer_.scrollTop,n.slideWrappers_.slice(0,r).forEach((function(t){t.classList.add("spz-carousel-hide")}))):n.lastTop=0),n.showProcessing_=!1,n.triggerActionByName_("slideEnd",t),n.attemptToFit_()}))):(this.slideWrappers_.forEach((function(t){t.classList.remove("spz-carousel-hide")})),this.showTargetSlide_(t,i,e).then((function(){n.isVertical_&&(n.slidesContainer_.scrollTop=n.getSum_(0,t),t!==n.max_-1&&t!==r||n.slideWrappers_.slice(0,r).forEach((function(t){t.classList.add("spz-carousel-hide")}))),n.showProcessing_=!1,n.triggerActionByName_("slideEnd",t),n.attemptToFit_()})))}return this.slideIndex_=t,this.slidesContainer_.setAttribute("select",this.slideIndex_),this.mutateElement((function(){n.controls_.setControlsState({prev:n.hasPrev_(),next:n.hasNext_()})})),!0}},{key:"attemptToFit_",value:function(){var i=this;if(this.element.hasAttribute("controls")){var n=function(){i.mutateElement((function(){return i.calcPrePosition_()}))};if(this.slidesContainer_){var e=this.getStartEndEle_(),s=e.nextEleList,o=e.preEleList;[].concat(y(o),y(s)).filter((function(t){return!(null!=t&&t.isMount&&t.isMount())})).map((function(i){return t.whenDefined(i).then((function(){return i.whenMounted()}))})).forEach((function(t){return t.then((function(){return n()}))}))}return n()}}},{key:"calcPrePosition_",value:function(){var t=this.slideIndex_*this.advanceCount_;if(this.slideWrappers_[t]){var i=SPZCore.Dom.scopedQuerySelector(this.slideWrappers_[t],"spz-img"),n=this.getStartEndEle_(),e=n.nextInfo,s=n.preInfo;if(SPZCore.Dom.toggleAttribute(this.element,"image",!!i),this.element.hasAttribute("zoom-in")||SPZCore.Dom.scopedQuerySelectorAll(this.element,"spz-zoom").length||!e.height&&!s.height)return SPZCore.Dom.setStyle(this.prevButton_,"top","50%"),void SPZCore.Dom.setStyle(this.nextButton_,"top","50%");var o=s.height>e.height?s:e;if(o.height){var r="".concat(o.height/2+this.getOffsetTop_(o.maxEle),"px");SPZCore.Dom.setStyle(this.prevButton_,"top",r),SPZCore.Dom.setStyle(this.nextButton_,"top",r)}}}},{key:"getStartEndEle_",value:function(){var t=this.slideIndex_*this.advanceCount_,i=SPZCore.Dom.scopedQuerySelectorAll(this.slideWrappers_[t],"spz-img");i||(i=SPZCore.Dom.scopedQuerySelectorAll(this.slideWrappers_[t],"spz-video"));var n=t+this.advanceCount_-1;n>=this.slideWrappers_.length&&(n=this.slideWrappers_.length-1);var e=SPZCore.Dom.scopedQuerySelectorAll(this.slideWrappers_[n],"spz-img");e||(e=SPZCore.Dom.scopedQuerySelectorAll(this.slideWrappers_[n],"spz-video"));var s=function(t){var i=0,n=null;return t.forEach((function(t){var e=t.clientHeight;e>=i&&(n=t,i=e)})),{height:i,maxEle:n}};return{preEleList:i=SPZCore.Types.toArray(i),nextEleList:e=SPZCore.Types.toArray(e),preInfo:s(i),nextInfo:s(e)}}},{key:"getOffsetTop_",value:function(t){for(var i=t.offsetTop,n=t.offsetParent;null!==n;){if("SPZ-CAROUSEL"===n.tagName)return i;i+=n.offsetTop,n=n.offsetParent}return i}},{key:"showSlideAndTriggerAction_",value:function(t,i,n){this.showSlide_(t,i,n)&&this.triggerActionByName_("slideChange",t)}},{key:"triggerActionByName_",value:function(t,i){var n=this.slides_[i],e=SPZUtils.Event.create(this.win,"spz-carousel.".concat(t),{"index":i,"path":null==n?void 0:n.getAttribute("src"),"tagName":null==n?void 0:n.tagName,"isImage":"SPZ-IMG"===(null==n?void 0:n.tagName)||"IMG"===(null==n?void 0:n.tagName),"total":this.slideWrappers_.length});this.action_.trigger(this.element,t,e,{bubbles:!1})}},{key:"showTargetSlide_",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0,s=1===e,o=this.getSlideNow_(t,s),l=this.getSlideNew_(t,s);return i?this.easeAnimate_(o,l):(o.length&&o.forEach((function(t){t.classList.remove(r),SPZCore.Dom.setStyle(t,"opacity",0),SPZCore.Dom.toggleAttribute(t,"index",!1)})),l.forEach((function(t,i){t.classList.add(r),SPZCore.Dom.setStyle(t,"opacity",1),t.setAttribute("index",i)})),this.slidesContainer_.scrollLeft&&(this.slidesContainer_.scrollLeft=0),this.isAdvanceCount_&&t===this.max_-1&&(this.slidesContainer_.scrollLeft=this.slideWrappers_[t-1].clientWidth),n())}},{key:"showScollSlide_",value:function(t,i){var n,e=this,s=1===i,o=this.getSlideNow_(t,s),l=this.getSlideNew_(t,s),h=s?o:l,u=s?l:o;if(h.forEach((function(t,i){!e.isVertical_&&SPZCore.Dom.setStyle(t,"order",i+1),SPZCore.Dom.toggleAttribute(t,"index",!1)})),u.forEach((function(t,i){SPZCore.Dom.toggleAttribute(t,"index",!1),!e.isVertical_&&SPZCore.Dom.setStyle(t,"order",h.length+i+1)})),this.isAdvanceCount_&&o.forEach((function(t){t.classList.remove(r)})),l.forEach((function(t,i){t.classList.add(r),SPZCore.Dom.setStyle(t,"opacity",1),t.setAttribute("index",i)})),1!==this.advanceCount_?this.slideWidth_=this.slidesContainer_.clientWidth:this.slideWidth_=null===(n=l[0])||void 0===n?void 0:n.clientWidth,this.isVertical_){var a=this.getSum_(0,t);this.slideWidth_=this.slideIndex_!==this.max_-1||t!==this.max_-this.advanceCount_?a:this.getSum_(0,t-1),1!==Math.abs(this.slideIndex_-t)||t!==this.max_-1&&this.slideIndex_!==this.max_-1?this.isLast=!1:this.isLast=!0,t||(this.slideWidth_=0)}else this.slidesContainer_.scrollLeft=s?0:this.slideWidth_;return this.animateScrollLeft_(i).then((function(){if(o.forEach((function(t){SPZCore.Dom.setStyle(t,"order","")})),l.forEach((function(t){SPZCore.Dom.setStyle(t,"order","")})),e.isAdvanceCount_||o.forEach((function(t){t.classList.remove(r)})),e.isVertical_){var i=e.max_-1-e.advanceCount_;t===e.max_-1||t===i?(e.lastTop=e.slidesContainer_.scrollTop,e.slideWrappers_.slice(0,i).forEach((function(t){t.classList.add("spz-carousel-hide")}))):e.lastTop=0}}))}},{key:"updateCount_",value:function(t,i){this.element.setAttribute("advance-count",parseInt(t,10)),this.advanceCount_=parseInt(t,10),this.max_=Math.ceil(this.slides_.length/this.advanceCount_),i?this.handleShowSlide_(this.slideIndex_,!1):(this.slideIndex_=null,this.initSlide_())}},{key:"updateVisible_",value:function(t){this.element.setAttribute("visible-count",Number(t)),this.visibleCount_=Math.round(t),this.handleShowSlide_(this.slideIndex_,!1)}},{key:"getSlideNow_",value:function(t,i){t>=this.max_&&(t=this.max_-1);var n=t*this.advanceCount_,e=n+this.advanceCount_;if(1!==this.visibleCount_){e=n+this.visibleCount_;var s=this.element.getAttribute("visible-count");parseInt(s,10)<parseFloat(s)&&(i?n-=1:e+=1)}var o=e-this.slideWrappers_.length;return o>0&&this.shouldLoop_?this.slideWrappers_.filter((function(t,i){return!(i>=n)})):(o>0&&!this.isAdvanceCount_&&(n-=o),this.isAdvanceCount_&&n===this.max_-1&&(n-=this.visibleCount_-1),this.slideWrappers_.filter((function(t,i){return!(i>=n&&i<e)})))}},{key:"getSlideNew_",value:function(t,i){t>=this.max_&&(t=this.max_-1);var n=t*this.advanceCount_,e=n+this.advanceCount_;if(1!==this.visibleCount_){e=n+this.visibleCount_;var s=this.element.getAttribute("visible-count");parseInt(s,10)<parseFloat(s)&&(i?n-=1:e+=1)}var o=e-this.slideWrappers_.length;return o>0&&this.shouldLoop_?this.slideWrappers_.filter((function(t,i){return i>=n})):(o>0&&!this.isAdvanceCount_&&(n-=o),this.isAdvanceCount_&&n===this.max_-1&&(n-=this.visibleCount_-1),this.slideWrappers_.filter((function(t,i){return i>=n&&i<e})))}},{key:"animateScrollLeft_",value:function(t){var i=this;if(this.isVertical_&&this.isLast)return n();var e=this.isVertical_?this.slidesContainer_.scrollTop:this.slidesContainer_.scrollLeft,s=SPZUtils.Transtion.numeric(this.isVertical_&&this.lastTop?this.lastTop:e,this.isVertical_?this.slideWidth_:e+t*this.slideWidth_),o=SPZCore.DS.bezierCurve(.8,0,.6,1);return this.element.hasAttribute("linear")&&(o=SPZCore.DS.bezierCurve(0,0,1,1)),SPZUtils.Animation.animate(this.slidesContainer_,(function(t){i.isVertical_?i.slidesContainer_.scrollTop=s(t):i.slidesContainer_.scrollLeft=s(t)}),Number(this.animateTime_)||300,o).thenAlways()}},{key:"easeAnimate_",value:function(t,i){var e;return null!=t&&t.length&&t.forEach((function(t){t.classList.remove(r)})),i.forEach((function(t){t.classList.add(r)})),(e=[],i.forEach((function(t){e.push(SPZUtils.Animation.animate(t,SPZUtils.Transtion.setStyles(t,{"opacity":SPZUtils.Transtion.numeric(0,1)}),500,SPZCore.Curves.EASE).thenAlways())})),Promise.all(e)).then((function(){return function(){if(!t)return n();var i=[];return t.forEach((function(t){i.push(SPZUtils.Animation.animate(t,SPZUtils.Transtion.setStyles(t,{"opacity":SPZUtils.Transtion.numeric(1,0)}),500,SPZCore.Curves.EASE).thenAlways())})),Promise.all(i)}()}))}},{key:"setupAutoplay_",value:function(){var t=Number(this.element.getAttribute("delay"));t>0&&(this.autoplayDelay_=Math.max(1e3,t)),this.autoplay_(),this.hasLoop_||(this.element.setAttribute("loop",""),this.hasLoop_=!0,this.shouldLoop_=!0)}},{key:"autoplay_",value:function(){this.shouldAutoplay_&&(this.clearAutoplayTimer_(),this.autoplayTimeoutId_=SPZServices.timerFor(this.win).delay(this.go.bind(this,1,!0,!0),this.autoplayDelay_))}},{key:"setMaxHeight_",value:function(){if(this.isVertical_){this.heightList=this.slideWrappers_.map((function(t){return t.clientHeight}));for(var t=this.getSum_(0,this.visibleCount_),i=1;i<this.slideWrappers_.length-this.visibleCount_;i++)t=Math.max(t,this.getSum_(i,i+this.visibleCount_));SPZCore.Dom.setStyles(this.slidesContainer_,{"height":"".concat(t,"px")})}}},{key:"getSum_",value:function(t,i){return this.heightList.slice(t,i).reduce((function(t,i){return t+i}),0)}},{key:"clearAutoplayTimer_",value:function(){null!==this.autoplayTimeoutId_&&(SPZServices.timerFor(this.win).cancel(this.autoplayTimeoutId_),this.autoplayTimeoutId_=null)}}])&&function(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(p.prototype,e),p}(t.BaseElement);self.SPZ.registerElement(k,g,".spz-carousel-slide>.i-spzhtml-replaced-content{-o-object-fit:contain;object-fit:contain}.spz-carousel-button{position:absolute;box-sizing:border-box;top:50%;border-radius:2px;opacity:0;pointer-events:all;background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.spz-mode-mouse .spz-carousel-button,spz-carousel.i-spzhtml-carousel-has-controls>.spz-carousel-button,spz-carousel[controls]>.spz-carousel-button{opacity:1;visibility:visible}.spz-carousel-button-prev{left:16px}.spz-carousel-button-next{right:16px}.i-spzhtml-carousel-button-start-hint .spz-carousel-button:not(.spz-disabled){animation:i-spzhtml-carousel-hint 1s ease-in 3s 1 normal both}@keyframes i-spzhtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}spz-carousel[i-spzhtml-carousel-hide-buttons] .spz-carousel-button-next,spz-carousel[i-spzhtml-carousel-hide-buttons] .spz-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}spz-carousel[visible-count] .i-spzhtml-slides-container{overflow-x:hidden!important}spz-carousel[direct=vertical] .i-spzhtml-slides-container .i-spzhtml-slide-item{display:-ms-flexbox;display:flex;opacity:0!important}spz-carousel[direct=vertical] .i-spzhtml-slides-container .i-spzhtml-slide-item-show{opacity:1!important;display:-ms-flexbox;display:flex}spz-carousel .i-spzhtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto!important;overflow-y:hidden;width:100%!important;scrollbar-width:none;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}spz-carousel:not([layout=container]) .i-spzhtml-slides-container{height:100%!important;position:absolute!important;top:0;left:0}[slidezoom][zoom-in] .i-spzhtml-slides-container{height:100%!important}.i-spzhtml-slides-container::-webkit-scrollbar{display:none!important}.i-spzhtml-slides-container.i-spzhtml-no-scroll{overflow-x:hidden!important}spz-carousel .i-spzhtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}spz-carousel .i-spzhtml-slide-item>*{width:100%;overflow:hidden!important}spz-carousel .i-spzhtml-slide-item img,video{-webkit-user-drag:none}spz-carousel .i-spzhtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}[slidezoom][zoom-in]{position:fixed!important;left:0;right:0;top:0;bottom:0;background:#000;z-index:1030;width:100vw!important}div[slide] .i-spzhtml-layout-size-defined .i-spzhtml-fill-content{z-index:1031}.spz-carousel-hide{display:none!important}[slidezoom] .close{position:absolute;top:24px;right:14px;width:36px;height:36px;z-index:1032}\n/*# sourceURL=/extensions/spz-carousel/0.1/spz-carousel.css*/")}()}});