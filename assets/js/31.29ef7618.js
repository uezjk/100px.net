(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{618:function(t,i,n){var s=n(3),e=n(619),o=n(135);s({target:"Array",proto:!0},{fill:e}),o("fill")},619:function(t,i,n){"use strict";var s=n(24),e=n(211),o=n(52);t.exports=function(t){for(var i=s(this),n=o(i),r=arguments.length,a=e(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,l=void 0===c?n:e(c,n);l>a;)i[a++]=t;return i}},621:function(t,i,n){t.exports=n.p+"assets/img/bgImg.8dbded20.png"},622:function(t,i,n){t.exports=n.p+"assets/img/prize.75c13c76.png"},981:function(t,i,n){"use strict";n.r(i);n(89),n(618);var s={data:function(){return{isPlay:!1,blocks:[{padding:"108px 61px 52px",imgs:[{width:"100%",src:n(621)}]}],slots:[{order:[1,2,0,3,4,5],speed:1}],prizes:new Array(6).fill().map((function(t,i){return{imgs:[{height:"100%",src:n(622),formatter:function(t){var n=t.width,s=t.height,e=document.createElement("canvas"),o=e.getContext("2d");return e.width=n/6,e.height=s,o.drawImage(t,-n/6*i,0,n,s),e}}]}})),defaultConfig:{mode:"horizontal",rowSpacing:"0px",colSpacing:"-41px"}}},mounted:function(){this.$refs.myLucky.play()},methods:{play:function(){this.$refs.myLucky.play(),this.isPlay=!0},stop:function(t){-1===t&&(this.isPlay=!1),this.$refs.myLucky.stop(t)},endCallback:function(t){this.isPlay=!1}}},e=n(48),o=Object(e.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("SlotMachine",{ref:"myLucky",attrs:{width:"360px",height:"260px",blocks:this.blocks,slots:this.slots,prizes:this.prizes,defaultConfig:this.defaultConfig},on:{end:this.endCallback}})],1)}),[],!1,null,null,null);i.default=o.exports}}]);