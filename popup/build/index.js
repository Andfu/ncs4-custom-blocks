!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var a in l)e.o(l,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:l[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getIds:function(){return z},getNextId:function(){return I},requestId:function(){return P}});var l={};function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},a.apply(this,arguments)}e.r(l),e.d(l,{createId:function(){return R},deleteId:function(){return A}});var o=window.wp.element,n=window.wp.blocks,r=window.wp.blockEditor;function p(e,t){let l={};for(let a in t)if("string"==typeof t[a]&&e[a]&&"object"==typeof e[a]&&e[a].type)switch(e[a].type){case"string":l[a]=t[a];break;case"boolean":l[a]=Boolean(t[a]);break;case"bool":case"int":case"integer":case"number":case"json":l[a]=JSON.parse(t[a]);break;case"null":null!==t[a]&&""!==t[a]&&"null"!==t[a]&&console.warn("Attribute '"+a+"': expected null, got '"+t[a]+"'"),l[a]=null;break;default:console.warn("Attribute '"+a+"': Unknown type '"+e[a].type+"'")}else l[a]=t[a];return l}var s=window.React,i=e.n(s),u=window.wp.data,c=window.wp.components;function d(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}class m extends i().Component{getChoices(e){let t=[];return e.forEach(((e,l)=>{t[l]={attribute:e.attribute,value:NaN==e.value||null==e.value?e.default:e.value}})),t}getChoice(e,t){for(let l of t)if(l.attribute===e)return l}render(){let e=this.props.maxRadioOptions||5,t=this.props.options,l=this.props.onChange,a=this.getChoices(t),n=[...Array(t.length).keys()].map((n=>(0,o.createElement)(b,{key:n,maxRadioOptions:e,label:t[n].label,help:t[n].help,choices:t[n].choices,multiple:t[n].multiple,invertValue:t[n].invertValue,min:t[n].min,max:t[n].max,step:t[n].step,markStep:t[n].markStep,markRender:t[n].markRender,tooltipRender:t[n].tooltipRender,value:this.getChoice(t[n].attribute,a).value,disabled:t[n].disabled,callback:e=>{"function"==typeof t[n].onChange&&(e=t[n].onChange(e)),l({[t[n].attribute]:e})}})));return(0,o.createElement)(o.Fragment,null,n)}}class b extends i().Component{render(){let e=this.props.maxRadioOptions,t=this.props.value,l=this.props.label,a=this.props.help,n=this.props.choices,r=this.props.min,p=this.props.max,s=this.props.step,i=this.props.markStep,u=this.props.markRender,d=this.props.tooltipRender,m=this.props.multiple,b=this.props.invertValue||!1,y=this.props.disabled,f=this.props.callback;return(0,o.createElement)(o.Fragment,null,Array.isArray(t)?(0,o.createElement)(h,this.props):n?m?(0,o.createElement)(g,{label:l,help:a,options:n,value:t,callback:f,disabled:y}):n.length<=e?(0,o.createElement)(c.RadioControl,{label:l,help:a,selected:t,onChange:f,options:n,disabled:y}):(0,o.createElement)(c.SelectControl,{label:l,help:a,value:t,onChange:f,options:n,disabled:y}):isNaN(r)||isNaN(p)||isNaN(s)?(0,o.createElement)(c.ToggleControl,{label:l,help:a,checked:b!=Boolean(t),onChange:e=>f(b!=e),disabled:y}):(0,o.createElement)(v,{label:l,help:a,value:t,min:r,max:p,step:s,markStep:i,markRender:u,tooltipRender:d,disabled:y,callback:f}))}}class h extends i().Component{getProps(e,t){var l={...e};for(let[e,a]of Object.entries(l))Array.isArray(a)&&(l[e]=a[t]);return l}render(){let e=this.props.value,t=this.props.callback,l=[...Array(e.length).keys()].map((l=>(0,o.createElement)(b,a({},this.getProps(this.props,l),{key:l,callback:a=>{let o=[...e];o[l]=a,t(o)}}))));return(0,o.createElement)(o.Fragment,null,l)}}class g extends i().Component{constructor(e){super(e),this.id="ncs4-components-checkboxgroup-"+String(document.getElementsByClassName("ncs4-components-checkboxgroup").length)}render(){let e=this.props.label,t=this.props.help,l=this.props.value,a=this.props.options,n=this.props.disabled,r=this.props.callback,p=[...Array(a.length).keys()].map((e=>(0,o.createElement)(c.CheckboxControl,{key:e,label:a[e].label,checked:l.includes(a[e].value),disabled:n,name:this.id,onChange:t=>{var o=[...l];if(t)o.push(a[e].value);else{let t=o.indexOf(a[e].value);t>-1&&o.splice(t,1)}r(o)}})));return(0,o.createElement)("div",{className:"ncs4-components-checkboxgroup"},(0,o.createElement)("label",{className:"components-base-control__label css-pezhm9-StyledLabel e1puf3u2",for:this.id},e),(0,o.createElement)("p",{className:"components-base-control__help css-1gbp77-StyledHelp e1puf3u3"},t),p)}}class v extends i().Component{createMarks(e,t,l,a){var o=Array(Math.floor((t-e)/l)+1);for(let t=0;t<o.length;t++)o[t]={value:e,label:a(e)},e+=l;return o}render(){let e=this.props.label,t=this.props.help,l=this.props.value,a=this.props.min,n=this.props.max,r=this.props.step||1,p=this.props.markStep||r,s=this.props.markRender||(e=>String(e)),i=this.props.disabled,u=this.props.tooltipRender||s,d=this.props.callback;return(0,o.createElement)(c.RangeControl,{label:e,help:t,value:l,min:a,max:n,step:r,marks:this.createMarks(a,n,p,s),renderTooltipContent:u,disabled:i,onChange:d})}}class y extends i().Component{clamp(e,t,l){return Math.min(Math.max(e,t),l)}getUnitSettings(e){for(let t of e.units)if(t.value===e.value)return t}render(){let e=this.props.label,t=this.props.help,l=this.props.disabled,n=this.props.onChange,r=this.props.toggleSelector,p=this.props.unitSelector,s=this.props.slider,i=r&&r.attribute,u=!r||r.value||r.default,d=p.value||p.default,m=isNaN(s.value)?s.default:s.value;(r&&void 0===r.value||void 0===p.value||isNaN(s.value))&&n({[i]:u,unit:d,value:m,asString:String(m)+d});let h=this.getUnitSettings(p);return(0,o.createElement)(o.Fragment,null,e&&(0,o.createElement)("p",{className:"components-base-control__label css-pezhm9-StyledLabel e1puf3u2"},e),(0,o.createElement)(c.PanelRow,null,i&&(0,o.createElement)(b,a({},r,{value:u,callback:e=>n({[i]:e,unit:d,value:m,asString:String(m)+d})})),(0,o.createElement)(b,a({},p,{multiple:!1,choices:p.units,disabled:l||!u,callback:e=>{let t={...p,value:e},l=this.getUnitSettings(t);n({[i]:u,unit:e,value:this.clamp(m,l.min,l.max),asString:this.clamp(m,l.min,l.max)+e})}}))),(0,o.createElement)(v,a({},s,{value:m,min:h.min,max:h.max,step:h.step,markStep:h.markStep||h.step,tooltipRender:e=>String(e)+(h.label||h.value),disabled:l||!u,callback:e=>n({[i]:u,unit:d,value:this.clamp(e,h.min,h.max),asString:this.clamp(e,h.min,h.max)+d})})),t&&(0,o.createElement)("p",{className:"components-base-control__help css-1gbp77-StyledHelp e1puf3u3"},t))}}class f extends i().Component{validateNumber(e){return!Boolean(e)||f.reg.test(e)}render(){let e=this.validateNumber(this.props.value);return(0,o.createElement)(c.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e)},label:"Phone",help:e?null:"Unrecognized phone number format (perhaps you've made a typo?)"})}}d(f,"reg",/^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);class E extends i().Component{validateEmail(e){return!Boolean(e)||E.reg.test(e)}render(){let e=this.validateEmail(this.props.value);return(0,o.createElement)(c.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e),this.validateEmail(e)&&this.props.onChangeComplete(e)},label:"Email",help:e?null:"Invalid email address"})}}function k(e,t){let l={};return e.slug||(t?(l.backgroundColor=e.color,l["--palette-bg-color"]=e.color):(l.color=e.color,l["--palette-color"]=e.color)),l}d(E,"reg",/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);const x=(e,t)=>{return{data:e,className:(l=e.slug,a=t?"background-color":"color",l&&a?"has-"+l+"-"+a:null),style:k(e,t)};var l,a};function C(e,t,l){let a={},o=(0,u.select)("core/block-editor").getSettings().colors,[n,r]=(0,s.useState)({});return(0,s.useEffect)((()=>{a=function(e,t){if(!e||"object"!=typeof e)return console.warn("Malformed color"),{color:null,slug:null};for(let l of t)if(e.color&&l.color===e.color||e.slug&&l.slug===e.slug)return{color:l.color,slug:l.slug};return e.color&&!e.slug?e:(console.warn("Unknown color:",e),{color:null,slug:null})}(e,o),"function"==typeof l&&l(a),r(x(a,t))}),[e.color,e.slug]),n}var S,_,w,N,O=e=>{let t=(0,u.select)("core/block-editor").getSettings();return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,e.label),(0,o.createElement)(c.ColorPalette,{colors:t.colors,disableCustomColors:t.disableCustomColors,value:e.value,onChange:l=>{let a=function(e,t){return t.filter((t=>t.color===e))[0]||null}(l,t.colors);e.onChange({color:l,slug:a?a.slug:null})}}))};function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},T.apply(this,arguments)}var B=function(e){return s.createElement("svg",T({id:"dismiss_svg__Layer_1","data-name":"Layer 1",xmlns:"http: //www.w3.org/2000/svg",viewBox:"0 0 43 95.17"},e),S||(S=s.createElement("defs",null,s.createElement("style",null,".dismiss_svg__cls-2,.dismiss_svg__cls-4{fill:none;stroke-width:3px;stroke-miterlimit:10}"))),_||(_=s.createElement("path",{className:"dismiss_svg__cls-1",d:"M21.5 42.5a21 21 0 1 1 21-21 21 21 0 0 1-21 21",transform:"translate(0 52.67)"})),w||(w=s.createElement("path",{className:"dismiss_svg__cls-2",d:"m10.91 84.76 21.18-21.19M10.91 63.57l21.18 21.19"})),s.createElement("path",{d:"M21.5-10.17a21 21 0 0 1-21-21 21 21 0 0 1 21-21 21 21 0 0 1 21 21 21 21 0 0 1-21 21m0-40a19 19 0 0 0-19 19 19 19 0 0 0 19 19 19 19 0 0 0 19-19 19 19 0 0 0-19-19Z",transform:"translate(0 52.67)",style:{strokeMiterlimit:10}}),N||(N=s.createElement("path",{className:"dismiss_svg__cls-4",d:"m10.91 32.09 21.18-21.18M10.91 10.91l21.18 21.18"})))};const z=e=>e.ids||[],P=(e,t)=>{t=Number(t);let l=e.ids.length;if(t<0)return I(e);if(0===l)return-1;for(let a=0;a<l;a++)if(e.ids[a]===t)return I(e);return-1},I=e=>{for(let t=0;t<e.ids.length;t++){const l=e.ids[t];if(0===t&&0!==l)return l;if(t+1<e.ids.length&&e.ids[t+1]-1>l||t+1>=e.ids.length)return l+1}return 0};function R(e){return{type:"CREATE",id:e}}function A(e){return{type:"DELETE",id:e}}const L=e=>{let t=e.attributes,l="popup-"+String(t.popupId),a=x(t.popupBgColor,!0),n=x(t.popupTextColor,!1),r=`\n    #${l}:target {\n      display: block;\n    }\n  `;return(0,o.createElement)(o.Fragment,null,e.backend?(0,o.createElement)("a",{"data-popup-link-style":t.popupLinkStyle,className:"ncs4-popup-button "+(e.className||"")+" "+(t.popupLinkStyle||"")},t.popupButtonTitle):(0,o.createElement)("a",{"data-popup-link-style":t.popupLinkStyle,className:"ncs4-popup-button "+(e.className||"")+" "+(t.popupLinkStyle||""),href:"#"+l},t.popupButtonTitle),(0,o.createElement)("div",{"data-popup-id":t.popupId,id:l,className:"ncs4-popup__wrapper",style:{textAlign:"left"}},(0,o.createElement)("a",{"data-popup-opacity":t.popupOverlayOpacity,className:"ncs4-popup-overlay",href:"#!",style:{opacity:String(t.popupOverlayOpacity)+"%"}}),(0,o.createElement)("div",{className:"ncs4-popup-content__wrapper"},(0,o.createElement)("div",{"data-popup-background":JSON.stringify(a.data),"data-popup-color":JSON.stringify(n.data),"data-popup-size":t.popupSize,"data-popup-shadow":t.popupShadow,className:["ncs4-popup-content",a.className,n.className,t.popupSize,t.popupShadow?"popup-has-shadow":null].join(" "),style:{...a.style,...n.style}},e.children)),(0,o.createElement)("style",null,r)))};L.Dismiss=e=>(0,o.createElement)("a",{href:"#!",className:"ncs4-popup__popup-dismiss-link",title:"Dismiss"},(0,o.createElement)(B,{className:"ncs4-popup__popup-dismiss",viewBox:"0 52.67 43 43"})),L.Header=e=>(0,o.createElement)("div",{className:"ncs4-popup__popup-header"},(0,o.createElement)("div",{className:"ncs4-popup__header-content"},e.children),(0,o.createElement)(L.Dismiss,null)),L.Title=e=>(0,o.createElement)("h1",{className:"ncs4-popup__popup-title"},e.title),L.Body=e=>(0,o.createElement)("div",{className:"ncs4-popup__popup-body"},e.children),L.className="ncs4-popup",L.sizeOptions=[{value:"size-alert",label:"Alert"},{value:"size-small",label:"Small"},{value:"size-body",label:"Medium (body size)"},{value:"size-large",label:"Large"}],L.linkOptions=[{value:"",label:"Link"},{value:"ncs4-button ncs4-button__blue",label:"Blue button"},{value:"ncs4-button ncs4-button__yellow",label:"Yellow button"},{value:"ncs4-button ncs4-button__gold",label:"Gold button"}];var j=L;function M(e){return(0,o.createElement)("div",a({},e.blockProps,{className:[e.blockProps.className,"ncs4-popup",j.className].join(" ")}),(0,o.createElement)(j,{backend:e.backend,attributes:e.attributes},e.backend?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.RichText,{tagName:"h1",value:e.attributes.popupTitle,onChange:e.setAttribute("popupTitle"),placeholder:"Popup"}),(0,o.createElement)(r.InnerBlocks,null)):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(j.Header,null,(0,o.createElement)(j.Title,{title:e.attributes.popupTitle})),(0,o.createElement)(j.Body,null,(0,o.createElement)(r.InnerBlocks.Content,null)))))}function F(e){return(0,o.createElement)(o.Fragment,null,e.useInlineSvg?(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.img.data}}):(0,o.createElement)("embed",{type:e.img.mime,src:e.img.url}))}(0,u.registerStore)("ncs4/popup",{selectors:t,actions:l,reducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ids:[]},{id:t,type:l}=arguments.length>1?arguments[1]:void 0;switch(t=Number(t),l){case"CREATE":let l=[],a=0,o=!1;for(let n=0;n<e.ids.length;n++)!o&&e.ids[n]>t&&(l[a]=t,o=!0,a++),l[a]=e.ids[n],a++;return o||(l[l.length]=t),{...e,ids:l};case"DELETE":return{...e,ids:e.ids.filter((e=>e!==t))};default:return e}}});const U=e=>({marginLeft:"left"==e.align?0:"auto",marginRight:"right"==e.align?0:"auto"});function H(e){return e.useInlineSvg=null==e.useInlineSvg||e.useInlineSvg,(0,o.createElement)(r.MediaUploadCheck,null,(0,o.createElement)(r.MediaUpload,{onSelect:e.onChange,value:e.img?e.img.id:null,allowedTypes:["image"],render:t=>{let{open:l}=t;return(0,o.createElement)(c.Button,{className:e.img?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:l},e.img?"image/svg+xml"===e.img.mime&&e.img.data?(0,o.createElement)(F,{img:e.img,useInlineSvg:e.useInlineSvg,style:U(e)}):(0,o.createElement)("img",{src:e.img.url,style:U(e)}):"Choose an image")}}))}function D(e){let t=e.save;return t||console.error("Prop 'save' is null or undefined. React component expected"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},(0,o.createElement)(t,a({},e,{style:{...e.style,flex:"0 1 840px"},attributes:e.state,blockProps:e.blockProps,backend:!0}))),(0,o.createElement)(r.InspectorControls,null,e.controlPanels.map(((t,l)=>(0,o.createElement)($,a({},t,{state:e.state,setAttribute:e.setAttribute,key:l}))))))}function $(e){let t=null==e.initialOpen||e.initialOpen,l=e.setAttribute,n=e.state;return(0,o.createElement)(c.PanelBody,{title:e.label,initialOpen:t},e.controls.map(((e,t)=>{if(e.disabled)return null;switch(e.type){case"text":return(0,o.createElement)(c.TextControl,a({},e,{key:t,value:n[e.attribute],onChange:l(e.attribute)}));case"unit":return(0,o.createElement)(y,a({},e,{key:t,toggleSelector:e.useToggle?{attribute:"enabled",label:e.toggleLabel,help:e.toggleHelp,value:n[e.attribute.enabled]}:{},unitSelector:{label:e.selectorLabel,value:n[e.attribute.unit],units:e.selectorChoices},slider:{label:e.sliderLabel,help:e.sliderHelp,value:n[e.attribute.value]},onChange:t=>l(e.attribute)(t[e.attribute])}));case"color":return(0,o.createElement)(O,a({},e,{key:t,value:n[e.attribute].color,onChange:l(e.attribute)}));case"image":return(0,o.createElement)(H,a({},e,{onChange:t=>function(e,t){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]||"image/svg+xml"!==e.mime?t(e):fetch(e.url).then((e=>e.text())).then((l=>{e.data=l,t(e)}))}(t,l(e.attribute)),img:n[e.attribute]}));case"choice":return(0,o.createElement)(m,{options:[{...e,value:n[e.attribute]}],key:t,type:e.type,onChange:t=>l(e.attribute)(t[e.attribute])});case"phone":return(0,o.createElement)(f,a({},e,{key:t,value:n[e.attribute],onChange:l(e.attribute)}));case"email":return(0,o.createElement)(E,a({},e,{key:t,value:n[e.attribute],onChange:l(e.attribute)}));default:console.error("ControlPanel: Invalid control type '"+e.type+"'")}})))}const V=e=>t=>{e(((e,l)=>Object.assign({},e,t)))};function Z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,l]=(0,s.useState)(e);return[t,V(l)]}function J(e){let[t,l,n]=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},[o,n]=Z(l),r=l=>o=>{n({[l]:o}),t({[l]:"function"==typeof a[l]&&a[l].length<=2?a[l](o,e):o})};return[o,r,e=>{for(let t in e)r(t)(e[t])}]}(e.attributes,e.setAttributes,{...e.attributes},{popupButtonTitle:e=>e.trim(),popupTitle:e=>e.trim()}),r=function(e,t,l,a){return((e,t,l)=>{(0,s.useEffect)((()=>{let{createId:t,deleteId:a}=(0,u.dispatch)("ncs4/popup"),o=(0,u.select)("ncs4/popup").requestId(e);return-1===o&&(o=e),l(o),t(o),()=>{(0,u.dispatch)("ncs4/popup").deleteId(o)}}),[t])})(t.popupId,e,l("popupId")),C(t.popupBgColor,l("popupBgColor")),C(t.popupTextColor,l("popupTextColor")),{label:"Popup settings",controls:(o=a,[{type:"text",label:"Button title",placeholder:"Show",attribute:"popupButtonTitle",disabled:o.popupButtonTitle},{type:"color",label:"Popup background",attribute:"popupBgColor",disabled:o.popupBgColor},{type:"color",label:"Popup text",attribute:"popupTextColor",disabled:o.popupTextColor},{type:"choice",label:"Use shadow below header",attribute:"popupShadow",disabled:o.popupShadow},{type:"choice",label:"Overlay opacity",attribute:"popupOverlayOpacity",min:0,max:100,step:1,markStep:20,markRender:e=>String(e)+"%",disabled:o.popupOverlayOpacity},{type:"choice",label:"Content size",attribute:"popupSize",choices:L.sizeOptions,disabled:o.popupSize},{type:"choice",label:"Link style",attribute:"popupLinkStyle",choices:L.linkOptions}])};var o}(e.blockProps.clientId,t,l,{});return(0,o.createElement)(D,a({},e,{save:M,state:t,setAttribute:l,controlPanels:[r]}))}const q=Object.assign({popupOverlayOpacity:{type:"int",source:"attribute",attribute:"data-popup-opacity",selector:".ncs4-popup__popup-overlay",default:(G=Object.assign({popupOverlayOpacity:90,popupBgColor:{color:null,slug:"white-bright"},popupTextColor:{color:null,slug:"secondary-1c"},popupButtonTitle:"Show",popupId:0,popupSize:"size-body",popupLinkStyle:"",popupShadow:!1},G)).popupOverlayOpacity},popupBgColor:{type:"json",source:"attribute",attribute:"data-popup-background",selector:".ncs4-popup-content",default:G.popupBgColor},popupTextColor:{type:"json",source:"attribute",attribute:"data-popup-color",selector:".ncs4-popup-content",default:G.popupTextColor},popupButtonTitle:{type:"string",source:"text",selector:".ncs4-popup-button",default:G.popupButtonTitle},popupId:{type:"int",source:"attribute",attribute:"data-popup-id",selector:".ncs4-popup__wrapper",default:G.popupId},popupSize:{type:"string",source:"attribute",attribute:"data-popup-size",selector:".ncs4-popup-content",default:G.popupSize},popupLinkStyle:{type:"string",source:"attribute",attribute:"data-popup-link-style",selector:".ncs4-popup-button",default:G.popupLinkStyle},popupShadow:{type:"bool",source:"attribute",attribute:"data-popup-shadow",selector:".ncs4-popup-content",default:G.popupShadow}},{popupTitle:{type:"string",source:"html",selector:".ncs4-popup__popup-title"}});var G;(0,n.registerBlockType)("ncs4-custom-blocks/popup",{apiVersion:2,title:"Popup",icon:"testimonial",category:"layout",attributes:q,edit:e=>(0,o.createElement)(J,a({},e,{attributes:p(q,e.attributes),blockProps:(0,r.useBlockProps)()})),save:e=>(0,o.createElement)(M,a({},e,{attributes:p(q,e.attributes),blockProps:r.useBlockProps.save()}))})}();