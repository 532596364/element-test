<template>
    <div>
        <div class="box">
            <h1>区域加载</h1>
            <el-table
                v-loading="loading"
                :data="tableData"
                style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="box">
            <h1>整页加载</h1>
            <el-button
                type="primary"
                @click="openFullScreen"
                v-loading.fullscreen.lock="fullscreenLoading">
                指令方式
            </el-button>
            <el-button
                type="primary"
                @click="openFullScreen2">
                服务方式
            </el-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            loading: true,
            fullscreenLoading: false
        }
    },
    methods: {
        openFullScreen () {
            this.fullscreenLoading = true
            setTimeout(() => {
                this.fullscreenLoading = false
            }, 2000)
        },
        openFullScreen2 () {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
                loading.close()
            }, 2000)
        }
    }
}
</script>
<style>
body {
    margin: 0;
}
.box {
    margin-bottom: 15px;
}
</style>
