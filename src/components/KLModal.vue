<template>
    <div>
        <div class="box">
            <h2>消息提示</h2>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </div>
        <div class="box">
            <h2>确认消息</h2>
            <el-button type="text" @click="open2">点击打开 Message Box</el-button>
        </div>
        <div class="box">
            <h2>提交内容</h2>
            <el-button type="text" @click="open3">点击打开 Message Box</el-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        open () {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        },
        open2 () {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        open3 () {
            this.$prompt('请输入邮箱', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确'
            }).then(({value}) => {
                this.$message({
                    type: 'success',
                    message: '你的邮箱是: ' + value
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                })
            })
        }
    }
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}

.box {
    margin-bottom: 20px;
}
</style>
<style>
</style>
