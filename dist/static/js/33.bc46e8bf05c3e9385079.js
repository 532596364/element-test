webpackJsonp([33],{"0DZu":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},staticRenderFns:[]};var a=o("VU/8")(n,l,!1,function(e){o("8koV")},null,null);t.default=a.exports},"8koV":function(e,t){}});
//# sourceMappingURL=33.bc46e8bf05c3e9385079.js.map