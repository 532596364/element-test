<template>
    <div>
        <div class="box">
            <h2>基础用法</h2>
            <el-switch
                v-model="value2"
                active-color="#00C4C0"
                inactive-color="#BFBFBF">
            </el-switch>
        </div>
        <div class="box">
            <h2>禁用状态</h2>
            <el-switch
                v-model="value6"
                disabled>
            </el-switch>
            <el-switch
                v-model="value7"
                disabled>
            </el-switch>
        </div>
        <div class="box">
            <h2>文字描述</h2>
            <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
            </el-switch>
            <el-switch
                style="display: block"
                v-model="value4"
                active-text="按月付费"
                inactive-text="按年付费">
            </el-switch>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: true,
            value2: true,
            value6: true,
            value7: false,
            value3: true,
            value4: true
        }
    }
}
</script>
<style>
/*覆盖radio样式*/

</style>
<style scoped>
.box {
    margin-bottom: 20px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
