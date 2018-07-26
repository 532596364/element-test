<template>
    <div>
        <div class="box">
            <h2>基础用法</h2>
            <el-row>
                <el-col :span="6">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <span class="demonstration">带快捷选项</span>
            <el-row>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <h2>可清空</h2>
            <el-row>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="6">
                    <el-input
                        placeholder="请选择日期"
                        suffix-icon="el-icon-date"
                        v-model="input2">
                    </el-input>
                </el-col>
                <el-col :span="6" :offset="2">
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input21">
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <h2>textarea</h2>
            <el-row>
                <el-col :span="6">
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <h2>复合型输入框</h2>
            <el-row>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" v-model="input3">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" v-model="input4">
                        <template slot="append">.com</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div>
            <h2>尺寸问题</h2>
            <el-row>
                <el-col :span="6">
                    <el-input
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input6">
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-input
                        size="medium"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input7">
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-input
                        size="small"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input8">
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-input
                        size="mini"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input9">
                    </el-input>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            input: '',
            input1: '',
            input10: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input21: '',
            input22: '',
            input23: '',
            textarea: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            select: ''
        }
    }
}
</script>
<style>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
     background-color: #fff;
}
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
