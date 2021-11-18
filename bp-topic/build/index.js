!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}([function(t,e){t.exports=window.wp.element},function(t,e){function s(){return t.exports=s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,s.apply(this,arguments)}t.exports=s,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=window.React},function(t,e){t.exports=window.wp.blockEditor},function(t,e){t.exports=window.wp.components},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=window.wp.data},function(t,e,s){"use strict";s.r(e);var i=s(1),n=s.n(i),a=s(0),r=s(5),o=s(3),c=s(2),l=s.n(c);class h extends l.a.Component{constructor(t){super(t),this.attributes=t.attributes,this.blockProps=t.blockProps}createClassName(t){return["ncs4-bp-topic"].join(" ")+" "+t}render(){return Object(a.createElement)("a",n()({},this.blockProps,{className:this.createClassName(this.blockProps.className),href:this.attributes.link}),Object(a.createElement)(g,{text:this.attributes.title}),Object(a.createElement)(u,{img:this.attributes.img,svg:this.attributes.svg}),Object(a.createElement)("div",{className:"ncs4-bp-topic__overlay"}))}}class g extends l.a.Component{constructor(t){super(t),this.text=t.text}render(){return Object(a.createElement)("div",{className:"ncs4-bp-topic__text-area"},Object(a.createElement)("p",null,this.text))}}class u extends l.a.Component{constructor(t){super(t),this.img=t.img,this.svg=t.svg}render(){let t=this.img&&"image/svg+xml"===this.img.mime&&this.svg;return Object(a.createElement)("div",n()({className:"ncs4-bp-topic__icon-area"},t?{dangerouslySetInnerHTML:{__html:this.svg}}:{}),this.img&&!t?Object(a.createElement)("img",{src:this.img.url}):null)}}var p=s(6),d=s(4);class b extends l.a.Component{constructor(t){super(t),this.attributes=t.attributes,this.blockProps=t.blockProps,this.clientId=t.clientId,this.setAttributes=t.setAttributes,this.setStateAttributes=this.setStateAttributes.bind(this),this.handleSelected=this.handleSelected.bind(this),this.onTitleChange=this.onTitleChange.bind(this),this.onLinkChange=this.onLinkChange.bind(this),this.onImageChange=this.onImageChange.bind(this),this.onSvgChange=this.onSvgChange.bind(this),this.state={editMode:!1,title:t.attributes.title,link:t.attributes.link,img:t.attributes.img,svg:t.attributes.svg},wp.data.subscribe(this.handleSelected)}createClassName(t){return["ncs4-bp-topic"].join(" ")+" "+t}setStateAttributes(t){this.setState(t,()=>{this.setAttributes(t)})}handleSelected(){let t=Object(p.select)("core/block-editor").getSelectedBlock();t&&(this.state.editMode||t.clientId!==this.clientId?this.state.editMode&&t.clientId!==this.clientId&&this.setState({editMode:!1}):this.setState({editMode:!0}))}onTitleChange(t){this.setStateAttributes({title:t})}onLinkChange(t){this.setStateAttributes({link:t})}onImageChange(t){this.setStateAttributes({img:t})}onSvgChange(t){this.setStateAttributes({svg:t})}render(){return Object(a.createElement)("div",n()({className:"ncs4-bp-topic__wrapper"},this.blockProps),this.state.editMode?Object(a.createElement)(m,{state:this.state,onTitleChange:this.onTitleChange,onLinkChange:this.onLinkChange,onImageChange:this.onImageChange,onSvgChange:this.onSvgChange}):Object(a.createElement)(h,{attributes:this.state,blockProps:this.blockProps}))}}class m extends l.a.Component{constructor(t){super(t),this.onTitleChange=t.onTitleChange,this.onLinkChange=t.onLinkChange,this.onImageChange=t.onImageChange,this.onSvgChange=t.onSvgChange,this.titleChange=this.titleChange.bind(this),this.linkChange=this.linkChange.bind(this),this.imageChange=this.imageChange.bind(this),this.updateSvg=this.updateSvg.bind(this),this.state=t.state}titleChange(t){this.setState({title:t}),this.onTitleChange(t)}linkChange(t){this.setState({link:t}),this.onLinkChange(t)}imageChange(t){this.setState({img:t}),this.onImageChange(t),"image/svg+xml"===t.mime&&this.updateSvg(t.url)}updateSvg(t){fetch(t).then(t=>t.text()).then(t=>{this.setState({svg:t}),this.onSvgChange(t)})}render(){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(d.TextControl,{label:"Topic",placeholder:"Best Practices Topic",value:this.state.title,onChange:this.titleChange}),Object(a.createElement)(d.TextControl,{label:"Topic page link",help:"Link to the topic page",placeholder:"/resources/best-practices/my-topic",value:this.state.link,onChange:this.linkChange}),Object(a.createElement)(o.MediaUploadCheck,null,Object(a.createElement)(o.MediaUpload,{onSelect:this.imageChange,value:this.state.img?this.state.img.id:null,allowedTypes:["image"],render:({open:t})=>Object(a.createElement)(d.Button,{className:this.state.img?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t},this.state.img?"image/svg+xml"===this.state.img.mime?Object(a.createElement)(C,{svg:this.state.svg}):Object(a.createElement)("img",{src:this.state.img.url}):"Choose an image")})))}}class C extends l.a.Component{constructor(t){super(t),this.data=t.svg}render(){return Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:this.data}})}}Object(r.registerBlockType)("ncs4-custom-blocks/bp-topic",{apiVersion:2,title:"Best Practices Topic",icon:"links",category:"layout",attributes:{title:{type:"string"},link:{type:"string"},img:{type:"object"},svg:{type:"string"}},edit:t=>Object(a.createElement)(b,n()({},t,{blockProps:Object(o.useBlockProps)()})),save:t=>Object(a.createElement)(h,n()({},t,{blockProps:o.useBlockProps.save()}))})}]);