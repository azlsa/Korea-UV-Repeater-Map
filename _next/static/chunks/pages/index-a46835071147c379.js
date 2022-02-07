(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6603)}])},6603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),o=n(7357),i=n(6720),a=n(4051),c=n.n(a),s=n(326),u=n(2293),l=n(3946),f=n(1496),p=n(1796),d=n(155),h=n(5861),m=n(7294),x=n(2761),y=n(892),_=n(7744),b=n(2648);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=(0,f.ZP)("div")((function(e){var t=e.theme;return j({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,p.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,p.Fq)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),O=(0,f.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),k=(0,f.ZP)(y.Z)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-root":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),border:"1px solid #f00",width:"30ch","&:focus-within":{width:"35ch"}}}}));function H(){var e=N(m.useState(void 0),2),t=(e[0],e[1]),n=N(m.useState([]),2),o=n[0],i=n[1];return m.useEffect((function(){fetch("data/repeater.csv").then(function(){var e,n=(e=c().mark((function e(n){var r,o,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.text();case 2:(r=e.sent)&&(o=(0,b.Z)(r),(a=o.features)&&(s=a.map((function(e){return{Name:e.properties.Name,Tx:Number(e.properties.Tx),Rx:Number(e.properties.Rx),Tone:Number(e.properties.Tone),Shift:Number(e.properties.Shift),Note:e.properties.Note,Type:e.properties.Type,Latitute:e.geometry.coordinates[1],Longitude:e.geometry.coordinates[0]}})),i(s)),t(o));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,c,"next",e)}function c(e){v(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}())}),[]),(0,r.jsx)(u.Z,{position:"static",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(l.Z,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(h.Z,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"Korean Amateur Radio UV Repeater Map"}),(0,r.jsxs)(Z,{children:[(0,r.jsx)(O,{children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)(_.Z,{autoHighlight:!0,getOptionLabel:function(e){return"string"===typeof e?e:"string"===typeof e.Name?e.Name:"?"},freeSolo:!0,groupBy:function(e){return e.Region},options:o,renderOption:function(e,t){return(0,r.jsxs)("li",w({},e,{children:[(0,r.jsx)(h.Z,{variant:"body1",children:t.Name}),(0,r.jsxs)(h.Z,{variant:"caption",children:["(",t.Rx,")"]})]}))},renderInput:function(e){return(0,r.jsx)(k,w({},e,{label:"\uac80\uc0c9",color:"secondary",size:"small"}))}})]})]})})}var P=n(5152),R=n(9008),S=n(214),T=n.n(S),A=function(){var e=(0,P.default)((function(){return Promise.all([n.e(456),n.e(655)]).then(n.bind(n,9437))}),{loadableGenerated:{webpack:function(){return[9437]}},ssr:!1});return(0,r.jsxs)("div",{className:T().container,children:[(0,r.jsxs)(R.default,{children:[(0,r.jsx)("title",{children:"\ud55c\uad6d \uc544\ub9c8\ucd94\uc5b4 \ubb34\uc120 \uc911\uacc4\uae30 \uc9c0\ub3c4"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"keywords",content:"\ud584\ub9b0\uc774,\uc544\ub9c8\ucd94\uc5b4,\ubb34\uc120,\ubb34\uc120\ud1b5\uc2e0,UHF,VHF,\uc911\uacc4\uae30,KARL,HAMRINI,\uacf5\ub3cc\uc774\ud30c\ud30c,\uc0ac\ub791\ud574\uc694,144Mhz,430Mhz,HAM,\uc544\ub9c8\ucd94\uc5b4\ubb34\uc120\uac24\ub7ec\ub9ac"}),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"}),(0,r.jsx)("meta",{property:"og:title",content:"\ud55c\uad6d \uc544\ub9c8\ucd94\uc5b4 \ubb34\uc120 \uc911\uacc4\uae30 \uc9c0\ub3c4"}),(0,r.jsx)("meta",{property:"og:site_name",content:"\uc544\ub9c8\ucd94\uc5b4\ubb34\uc120\uac24\ub7ec\ub9ac"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",height:"100vh"},children:[(0,r.jsx)(i.ZP,{}),(0,r.jsx)(H,{}),(0,r.jsx)(o.Z,{sx:{flexGrow:1,display:"flex"},children:(0,r.jsx)(o.Z,{sx:{flexGrow:1},children:(0,r.jsx)(e,{})})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(e){e.O(0,[774,726,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);