<template>
    <div>
        <div class="box">
            <h2>基础用法</h2>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <div class="box">
            <h2>禁用状态</h2>
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            radio: '1',
            radio1: '选中且禁用'
        }
    }
}
</script>
<style>

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
