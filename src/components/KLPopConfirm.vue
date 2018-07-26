<template>
    <div>
        <div class="box">
            <h2>嵌套操作</h2>
            <el-popover
                placement="top"
                v-model="visible2">
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" plain @click="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                </div>
                <el-button slot="reference" plain>删除</el-button>
            </el-popover>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            visible2: false
        }
    },
    methods: {
        handleSearch () {
            console.log('search!')
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
