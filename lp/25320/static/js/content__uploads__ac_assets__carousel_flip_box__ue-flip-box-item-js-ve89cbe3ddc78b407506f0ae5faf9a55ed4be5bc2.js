/*!/wp-content/uploads/ac_assets/carousel_flip_box/ue-flip-box-item.js*/var UEFlipboxItem=function(objFlip){var g_isWasHover=!1;var g_objFlipBox;var g_isHoverMode;var g_objTriggerFront,g_objTriggerBack;var g_backEventType;function turnOverActually(isBack){if(!isBack)
var isBack=g_objFlipBox.hasClass("uc-show");flipbox=g_objFlipBox[0];if(isBack){flipbox.classList.remove('uc-show');flipbox.classList.add('uc-hide');return(!0)}
flipbox.classList.remove('uc-hide');flipbox.classList.add('uc-show')}
function turnOverFlipBox(event){var objClicked=jQuery(event.target);var isHoverEvent=event.type!="click";if(isHoverEvent==!0)
g_isWasHover=!0;var isFrontClicked=isHoverEvent==!1&&objClicked.hasClass("ue-flip-box__panel--front");if(isFrontClicked==!0&&g_objTriggerFront.length==!0)
return(!0);var flipbox=g_objFlipBox[0];var isBack=flipbox.classList.contains('uc-show');if(g_isHoverMode==!0){if(isHoverEvent==!1&&g_isWasHover==!0)
return(!0);}else{if(isHoverEvent==!0){if(isBack==!0&&g_backEventType=="hover"&&event.type=="mouseleave"){turnOverActually(isBack)}
return(!0)}else{if(isBack==!0&&g_backEventType=="hover"&&g_isWasHover==!1)
return(!0);}}
if(isBack==!1&&event.type=="mouseleave")
return(!0);turnOverActually(isBack)}
function initFlipBox(objFlipboxWrapper){if(objFlipboxWrapper.length==0){console.log("flipbox not found: ");return(!1)}
g_objFlipBox=objFlipboxWrapper.find(".ue-flip-box__container");g_isHoverMode=g_objFlipBox.hasClass("ue-flip-box__container--hover");g_backEventType="hover";if(g_isHoverMode==!1)
g_backEventType="click";g_objTriggerFront=g_objFlipBox.find(".ue-flip-box__front-trigger");g_objTriggerBack=g_objFlipBox.find(".ue-flip-box__back-trigger");if(g_objTriggerBack.length==!1)
g_backEventType="hover";if(g_objTriggerFront.length&&g_objTriggerBack.length){g_objTriggerBack.on("click",turnOverFlipBox);g_objTriggerFront.on("click",turnOverFlipBox)}else{g_objFlipBox.on("click mouseenter mouseleave",turnOverFlipBox)}}
initFlipBox(objFlip);setTimeout(function(){jQuery('.ue-flip-box__panel--back').css('visibility','visible')},1000)};