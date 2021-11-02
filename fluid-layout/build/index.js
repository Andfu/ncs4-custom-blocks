!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.r(t);var o=n(3),l=n.n(o),a=n(0),r=n(4),i=n(2),m=n(1);const u=["ncs4-custom-blocks/fluid-layout-item"];var s=[["equal-grid","Equal Grid"],["equal-columns","Equal Columns"],["auto-grid","Auto Grid"],["fixed-columns","Fixed Columns"],["floated-image","Floated Image"]],c=[["space-around","Space Around"],["space-between","Space Between"],["space-evenly","Space Evenly"],["left","Left"],["center","Center"],["right","Right"],["normal","None"]],d=[["%","%"],["vw","vw"],["ch","ch"],["em","em"],["rem","rem"]],p=[["1fr","Equal Width"],["auto","Auto Width"]];const g=["equal-grid","equal-columns","floated-image"],b=["fixed-grid","fixed-columns"];function C(e){var t=[];return e.forEach(e=>{t.push({value:e[0],label:e[1]})}),t}[s,c,d,p].forEach(e=>{e.values=()=>e.map(e=>e[0]),e.labels=()=>e.map(e=>e[1]),e.default=()=>e[0][0]});const f=(e,t,n,o)=>["ncs4-fluid-layout",e.bgColor.class,e.textColor.class,"ncs4-fluid-layout__"+t,n?"has-max-width":null].join(" ")+" "+o;Object(r.registerBlockType)("ncs4-custom-blocks/fluid-layout",{apiVersion:2,title:"Fluid Layout",icon:"columns",category:"layout",supports:{color:{gradients:!0}},attributes:{bgColor:{type:"string"},customBgColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},alignment:{type:"string",default:"none"},padding:{type:"array",default:[0,0,0,0]},margin:{type:"array",default:[3,3,3,3]},optionLayout:{enum:s.values(),default:s.default()},minWidth:{type:"number",default:0},minWidthUnit:{enum:d.values(),default:d.default()},minWidth2:{type:"number",default:0},minWidth2Unit:{enum:d.values(),default:d.default()},useMaxWidth:{type:"boolean",default:!1},maxWidth:{type:"number",default:0},maxWidthUnit:{enum:d.values(),default:d.default()},rowGap:{type:"number",default:3},columnGap:{type:"number",default:3},optionJustify:{enum:c.values(),default:c.default()},numColumns:{type:"number",default:3},optionColSize:{enum:p.values(),default:p.default()}},edit:Object(i.withColors)({bgColor:"background-color",textColor:"color"})(e=>{const{bgColor:t,textColor:n,attributes:{alignment:o,padding:r,margin:h,optionLayout:x,minWidth:y,minWidthUnit:v,minWidth2:j,minWidth2Unit:O,maxWidth:E,useMaxWidth:w,maxWidthUnit:k,rowGap:W,columnGap:R,optionJustify:S,numColumns:M,optionColSize:P},setAttributes:B,clientId:U}=e,G=Object(i.useBlockProps)(),T=function(e,t){var n={bgColor:{class:"",color:""},textColor:{class:"",color:""}};return null!=e&&(n.bgColor=null!=e.class?{class:e.class}:{color:e.color}),null!=t&&(n.textColor=null!=t.class?{class:t.class}:{color:t.color}),n}(t,n);function _(e,t,n){for(var o=[];e<=t;)o.push({value:e,label:String(e)}),e+=n;return o}const L={"%":{min:0,max:100,step:1,marks:_(0,100,10)},vw:{min:0,max:100,step:1,marks:_(0,100,10)},ch:{min:10,max:50,step:5,marks:_(10,50,5)},em:{min:0,max:100,step:1,marks:_(0,100,10)},rem:{min:10,max:100,step:1,marks:_(10,100,10)}},q=L;function A(e){return t=>{var n=[...r];n[e]=t,B({padding:n})}}function N(e){return t=>{var n=[...h];n[e]=t,B({margin:n})}}const z=(e,t)=>n=>{e<t[n].min?B({[e]:t[n].min}):e>t[n].max&&B({[e]:t[n].max})},F=z(E,L),I=z(y,q);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.InspectorControls,null,Object(a.createElement)(m.PanelBody,{title:"Layout Settings",initialOpen:!0},Object(a.createElement)(m.SelectControl,{label:"Layout Type",value:x,onChange:e=>{B({optionLayout:e})},options:C(s)}),g.includes(x)&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(m.PanelRow,null,Object(a.createElement)(m.ToggleControl,{label:"Use max width",checked:w,help:w?"Content has a max width":"Content does not have a max width",onChange:e=>{B({useMaxWidth:e})}}),Object(a.createElement)(m.SelectControl,{label:"Units",value:k,onChange:e=>{F(e),B({maxWidthUnit:e})},options:C(d),disabled:!w})),Object(a.createElement)(m.RangeControl,{label:"Max width",value:E,onChange:e=>{B({maxWidth:e})},min:L[k].min,max:L[k].max,step:L[k].step,marks:L[k].marks,disabled:!w,renderTooltipContent:e=>e+k})),b.includes(x)&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(m.RangeControl,{label:"Columns",value:M,onChange:e=>{B({numColumns:e})},min:2,max:10,step:1,marks:_(2,10,1)}),Object(a.createElement)(m.RadioControl,{label:"Column Width",selected:P,onChange:e=>{B({optionColSize:e})},options:C(p)})),Object(a.createElement)(m.SelectControl,{label:"Units",value:v,onChange:e=>{I(e),B({minWidthUnit:e})},options:C(d)}),Object(a.createElement)(m.RangeControl,{label:"Min width",value:y,onChange:e=>{B({minWidth:e})},min:q[v].min,max:q[v].max,step:q[v].step,marks:q[v].marks,renderTooltipContent:e=>e+v}),Object(a.createElement)(m.SelectControl,{label:"Justify items",value:S,onChange:e=>{B({optionJustify:e})},options:C(c)})),Object(a.createElement)(m.PanelBody,{title:"Spacings",initialOpen:!0},Object(a.createElement)(m.RangeControl,{label:"Row Gap (rem)",value:W,onChange:e=>{B({rowGap:e})},min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Column Gap (rem)",value:R,onChange:e=>{B({columnGap:e})},min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Padding Top (rem)",value:r[0],onChange:A(0),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Padding Right (rem)",value:r[1],onChange:A(1),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Padding Bottom (rem)",value:r[2],onChange:A(2),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Padding Left (rem)",value:r[3],onChange:A(3),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Margin Top (rem)",value:h[0],onChange:N(0),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Margin Right (rem)",value:h[1],onChange:N(1),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Margin Bottom (rem)",value:h[2],onChange:N(2),min:0,max:5,step:.5,marks:!0}),Object(a.createElement)(m.RangeControl,{label:"Margin Left (rem)",value:h[3],onChange:N(3),min:0,max:5,step:.5,marks:!0}))),Object(a.createElement)(i.BlockControls,null,Object(a.createElement)(i.AlignmentToolbar,{value:o,onChange:e=>B({alignment:void 0===e?"none":e})})),Object(a.createElement)("div",l()({},G,{className:f(T,x,w,G.className),style:{"--min-width":y+v,"--max-width":w?E+k:null,"--columns":M,"--column-size":P,backgroundColor:T.bgColor.color,color:T.textColor.color,textAlign:"none"!=o?o:null,padding:r.join("rem ")+"rem",gap:W+"rem "+R+"rem",justifyContent:S}}),Object(a.createElement)(i.InnerBlocks,{allowedBlocks:u})))}),save:({attributes:e})=>{const{bgColor:t,customBgColor:n,textColor:o,customTextColor:l,alignment:r,padding:m,margin:u,optionLayout:s,minWidth:c,minWidthUnit:d,maxWidth:p,useMaxWidth:g,maxWidthUnit:b,rowGap:C,columnGap:h,optionJustify:x,numColumns:y,optionColSize:v,floatOptions:j}=e,O=i.useBlockProps.save(),E=function(e,t,n,o){var l={bgColor:{class:"",color:""},textColor:{class:"",color:""}};return l.bgColor=null!=e?{class:Object(i.getColorClassName)("background-color",e)}:{color:t},l.textColor=null!=n?{class:Object(i.getColorClassName)("color",n)}:{color:o},l}(t,n,o,l);return Object(a.createElement)("div",{className:f(E,s,g,O.className),style:{"--min-width":c+d,"--max-width":g?p+b:null,"--columns":y+";","--column-size":v,backgroundColor:E.bgColor.color,color:E.textColor.color,textAlign:"none"!=r?r:null,padding:m.join("rem ")+"rem",margin:u.join("rem ")+"rem",gap:C+"rem "+h+"rem",justifyContent:x}},Object(a.createElement)(i.InnerBlocks.Content,null))}})}]);