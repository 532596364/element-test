<template>
    <div>
        <div class="box">
            <h2>普通选择</h2>
            <el-select v-model="value" placeholder="请选择" clearable>
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" />
            </el-select>
            <el-select v-model="value" placeholder="请选择" clearable>
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="box">
            <h2>多选高度可变</h2>
            <el-select v-model="value5" multiple placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="box">
            <h2>多选高度不可变</h2>
            <el-select
                v-model="value11"
                multiple
                collapse-tags
                placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
            </el-select>
        </div>
        <div class="box">
            <el-select v-model="value7" placeholder="请选择">
                <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" />
                </el-option-group>
            </el-select>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '',
            value5: '',
            value11: '',
            value7: '',
            fullscreenLoading: false,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            options2: [],
            options3: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
            }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }]
        }
    }
}
</script>
<style scoped>
.box {
    width: 100%;
}
</style>
<style>
</style>
