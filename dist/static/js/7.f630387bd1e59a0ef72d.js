webpackJsonp([7],{"4yK7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"box"},[n("h2",[t._v("消息提示")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.open}},[t._v("点击打开 Message Box")])],1),t._v(" "),n("div",{staticClass:"box"},[n("h2",[t._v("确认消息")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.open2}},[t._v("点击打开 Message Box")])],1),t._v(" "),n("div",{staticClass:"box"},[n("h2",[t._v("提交内容")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.open3}},[t._v("点击打开 Message Box")])],1)])},staticRenderFns:[]};var o=n("VU/8")({methods:{open:function(){var t=this;this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(e){t.$message({type:"info",message:"action: "+e})}})},open2:function(){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},open3:function(){var t=this;this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(function(e){var n=e.value;t.$message({type:"success",message:"你的邮箱是: "+n})}).catch(function(){t.$message({type:"info",message:"取消输入"})})}}},s,!1,function(t){n("LB5B"),n("5TJV"),n("gSiH")},"data-v-222771b6",null);e.default=o.exports},"5TJV":function(t,e){},LB5B:function(t,e){},gSiH:function(t,e){}});
//# sourceMappingURL=7.f630387bd1e59a0ef72d.js.map