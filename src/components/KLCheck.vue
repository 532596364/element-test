<template>
    <div>
        <div class="box">
            <h2>基础用法</h2>
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <div class="box">
            <h2>禁用状态</h2>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </div>
        <div class="box">
            <h2>多选框组</h2>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="box">
            <h2>indeterminate 状态</h2>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
    data () {
        return {
            checkList: ['选中且禁用', '复选框 A'],
            checked: true,
            checked1: false,
            checked2: true,
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
        }
    },
    methods: {
        handleCheckAllChange (val) {
            this.checkedCities = val ? cityOptions : []
            this.isIndeterminate = false
        },
        handleCheckedCitiesChange (value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.cities.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
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
