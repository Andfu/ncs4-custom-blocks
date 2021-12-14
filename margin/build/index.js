!function(e){var t={};function r(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t,r){"use strict";r.r(t);var o=r(4),l=r.n(o),a=r(0),n=r(8),s=r(3),i=r(1),p=r.n(i),c=r(2),u=r(6);function d(e,t){return e&&t?"has-"+e+"-"+t:null}class b extends p.a.Component{render(){let e=this.props.label,t=(this.props.allowGradients,this.props.value),r=this.props.onChange,o=Object(u.select)("core/block-editor").getSettings();return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("p",null,e),Object(a.createElement)(c.ColorPalette,{colors:o.colors,disableCustomColors:o.disableCustomColors,clearable:!o.disableCustomColors,value:t,onChange:e=>{let t=o.colors.filter(t=>t.color===e)[0];r({color:e,slug:t?t.slug:null})}}))}}var h=r(7),m=r.n(h),g=r(5),x=r.n(g);class f extends p.a.Component{getChoices(e){let t=[];return e.forEach((e,r)=>{t[r]={attribute:e.attribute,value:e.value||e.default}}),t}getChoice(e,t){for(let r of t)if(r.attribute===e)return r}render(){let e=this.props.maxRadioOptions||5,t=this.props.options,r=this.props.onChange,o=this.getChoices(t),l=[...Array(t.length).keys()].map(l=>Object(a.createElement)(v,{key:l,maxRadioOptions:e,label:t[l].label,help:t[l].help,choices:t[l].choices,multiple:t[l].multiple,invertValue:t[l].invertValue,min:t[l].min,max:t[l].max,step:t[l].step,markStep:t[l].markStep,markRender:t[l].markRender,tooltipRender:t[l].tooltipRender,value:this.getChoice(t[l].attribute,o).value,disabled:t[l].disabled,callback:e=>{"function"==typeof t[l].onChange&&(e=t[l].onChange(e)),r({[t[l].attribute]:e})}}));return Object(a.createElement)(a.Fragment,null,l)}}class v extends p.a.Component{render(){let e=this.props.maxRadioOptions,t=this.props.value,r=this.props.label,o=this.props.help,l=this.props.choices,n=this.props.min,s=this.props.max,i=this.props.step,p=this.props.markStep,u=this.props.markRender,d=this.props.tooltipRender,b=this.props.multiple,h=this.props.invertValue||!1,m=this.props.disabled,g=this.props.callback;return Object(a.createElement)(a.Fragment,null,Array.isArray(t)?Object(a.createElement)(C,this.props):l?b?Object(a.createElement)(O,{label:r,help:o,options:l,value:t,callback:g,disabled:m}):l.length<=e?Object(a.createElement)(c.RadioControl,{label:r,help:o,selected:t,onChange:g,options:l,disabled:m}):Object(a.createElement)(c.SelectControl,{label:r,help:o,value:t,onChange:g,options:l,disabled:m}):isNaN(n)||isNaN(s)||isNaN(i)?Object(a.createElement)(c.ToggleControl,{label:r,help:o,checked:h!=Boolean(t),onChange:e=>g(h!=e),disabled:m}):Object(a.createElement)(k,{label:r,help:o,value:t,min:n,max:s,step:i,markStep:p,markRender:u,tooltipRender:d,disabled:m,callback:g}))}}class C extends p.a.Component{getProps(e,t){var r={...e};for(let[e,o]of Object.entries(r))Array.isArray(o)&&(r[e]=o[t]);return r}render(){let e=this.props.value,t=this.props.callback,r=[...Array(e.length).keys()].map(r=>Object(a.createElement)(v,x()({},this.getProps(this.props,r),{key:r,callback:o=>{let l=[...e];l[r]=o,t(l)}})));return Object(a.createElement)(a.Fragment,null,r)}}class O extends p.a.Component{constructor(e){super(e),this.id="ncs4-components-checkboxgroup-"+String(document.getElementsByClassName("ncs4-components-checkboxgroup").length)}render(){let e=this.props.label,t=this.props.help,r=this.props.value,o=this.props.options,l=this.props.disabled,n=this.props.callback,s=[...Array(o.length).keys()].map(e=>Object(a.createElement)(c.CheckboxControl,{key:e,label:o[e].label,checked:r.includes(o[e].value),disabled:l,name:this.id,onChange:t=>{var l=[...r];if(t)l.push(o[e].value);else{let t=l.indexOf(o[e].value);t>-1&&l.splice(t,1)}n(l)}}));return Object(a.createElement)("div",{className:"ncs4-components-checkboxgroup"},Object(a.createElement)("label",{className:"components-base-control__label css-pezhm9-StyledLabel e1puf3u2",for:this.id},e),Object(a.createElement)("p",{className:"components-base-control__help css-1gbp77-StyledHelp e1puf3u3"},t),s)}}class k extends p.a.Component{createMarks(e,t,r,o){var l=Array(Math.floor((t-e)/r)+1);for(let t=0;t<l.length;t++)l[t]={value:e,label:o(e)},e+=r;return l}render(){let e=this.props.label,t=this.props.help,r=this.props.value,o=this.props.min,l=this.props.max,n=this.props.step||1,s=this.props.markStep||n,i=this.props.markRender||(e=>String(e)),p=this.props.disabled,u=this.props.tooltipRender||i,d=this.props.callback;return Object(a.createElement)(c.RangeControl,{label:e,help:t,value:r,min:o,max:l,step:n,marks:this.createMarks(o,l,s,i),renderTooltipContent:u,disabled:p,onChange:d})}}p.a.Component;class j extends p.a.Component{validateNumber(e){return!Boolean(e)||j.reg.test(e)}render(){let e=this.validateNumber(this.props.value);return Object(a.createElement)(c.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e),this.validateNumber(e)&&this.props.onChangeComplete(e)},label:"Phone",help:e?null:"Invalid phone number"})}}m()(j,"reg",/^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);class y extends p.a.Component{validateEmail(e){return!Boolean(e)||y.reg.test(e)}render(){let e=this.validateEmail(this.props.value);return Object(a.createElement)(c.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e),this.validateEmail(e)&&this.props.onChangeComplete(e)},label:"Email",help:e?null:"Invalid email address"})}}m()(y,"reg",/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);class E extends p.a.Component{render(){let e=this.props.attributes,t=this.props.backend||!1,r=function(e){let t={};for(let r of e){if(!r.color)continue;let e=r.color.slug?null:r.color.color;for(let o of r.props)t[o]=e}return t}([{color:e.bgColor,props:["background-color","--palette-bg-color"]},{color:e.textColor,props:["color","--palette-color"]}]);return Object(a.createElement)("div",l()({},this.props.blockProps,{className:["ncs4-site-margin",d(e.bgColor.slug,"background-color"),d(e.textColor.slug,"color"),e.noPadding?"no-padding":null,"ncs4-site-margin__size-"+e.optionSize,this.props.blockProps.className].join(" "),style:{...r,textAlign:"none"!=e.alignment?e.alignment:null,paddingTop:e.verticalPadding[0]+"rem",paddingBottom:e.verticalPadding[1]+"rem",marginTop:e.verticalMargin[0]+"rem",marginBottom:e.verticalMargin[1]+"rem"}}),t?Object(a.createElement)(s.InnerBlocks,null):Object(a.createElement)(s.InnerBlocks.Content,null))}}class P extends p.a.Component{constructor(e){super(e),this.attributes=e.attributes,this.blockProps=e.blockProps,this.setAttributes=e.setAttributes,this.setStateAttributes=this.setStateAttributes.bind(this),this.updateState=this.updateState.bind(this),this.state={bgColor:this.attributes.bgColor,textColor:this.attributes.textColor,optionSize:this.attributes.optionSize,noPadding:this.attributes.noPadding,verticalPadding:this.attributes.verticalPadding,verticalMargin:this.attributes.verticalMargin,alignment:this.attributes.alignment}}setStateAttributes(e){this.setState(e,()=>{this.setAttributes(e)})}updateState(e){this.setStateAttributes(e)}render(){let e=[{attribute:"optionSize",label:"Content size (width)",help:"Max width of content area",value:this.state.optionSize,choices:[{value:"max",label:"Max (Full width, no margin)"},{value:"large",label:"Large (Use for layout)"},{value:"small",label:"Small (Use for body text)"}]},{attribute:"noPadding",label:"Padding (Left & Right)",help:this.state.noPadding?"Left-Right padding disabled (Use for layout)":"Left-Right padding enabled (Use for text)",value:this.state.noPadding,invertValue:!0},{attribute:"verticalPadding",label:["Padding Top (rem)","Padding Bottom (rem)"],value:this.state.verticalPadding,min:0,max:5,step:.5,tooltipRender:e=>String(e)+"rem"},{attribute:"verticalMargin",label:["Margin Top (rem)","Margin Bottom (rem)"],value:this.state.verticalMargin,min:0,max:5,step:.5,tooltipRender:e=>String(e)+"rem"}];return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(E,{blockProps:this.blockProps,attributes:this.state,backend:!0}),Object(a.createElement)(s.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:"Color",initialOpen:!1},Object(a.createElement)(b,{label:"Background color",value:this.state.bgColor.color,onChange:e=>{this.setStateAttributes({bgColor:e})}}),Object(a.createElement)(b,{label:"Text color",value:this.state.textColor.color,onChange:e=>{this.setStateAttributes({textColor:e})}})),Object(a.createElement)(c.PanelBody,{title:"General",initialOpen:!0},Object(a.createElement)(f,{options:e,onChange:this.updateState}))),Object(a.createElement)(s.BlockControls,null,Object(a.createElement)(s.AlignmentToolbar,{value:this.state.alignment,onChange:e=>this.setStateAttributes({alignment:void 0===e?"none":e})})))}}Object(n.registerBlockType)("ncs4-custom-blocks/margin",{apiVersion:2,title:"Site Margin",icon:"editor-table",category:"layout",attributes:{bgColor:{type:"object",default:{color:null,slug:null}},textColor:{type:"object",default:{color:null,slug:null}},alignment:{type:"string",default:"none"},noPadding:{type:"boolean",default:!1},optionSize:{type:"string",default:"small"},verticalPadding:{type:"array",default:[3,3]},verticalMargin:{type:"array",default:[3,3]}},edit:e=>Object(a.createElement)(P,l()({},e,{blockProps:Object(s.useBlockProps)()})),save:e=>Object(a.createElement)(E,l()({},e,{blockProps:s.useBlockProps.save()}))})}]);