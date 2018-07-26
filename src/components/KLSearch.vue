<template>
    <div>
        <div class="box">
            <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
                <kl-row>
                    <kl-col :span="6">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人1">
                            <el-input v-model="formInline.user1" placeholder="审批人1"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人2">
                            <el-input v-model="formInline.user2" placeholder="审批人2"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人3">
                            <el-input v-model="formInline.user3" placeholder="审批人3"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="时间问题">
                            <el-date-picker
                                v-model="formInline.value1"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </kl-col>
                </kl-row>
                <kl-row>
                    <kl-col :span="6">
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人4">
                            <el-input v-model="formInline.user4" placeholder="审批人4"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人4">
                            <el-input v-model="formInline.user4" placeholder="审批人4"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                    </kl-col>
                    <kl-col :span="6">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                    </kl-col>
                </kl-row>
                <el-form-item label="">
                    <el-button type="primary" @click="handleSearch">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            formInline: {
                user: '',
                user1: '',
                user2: '',
                user3: '',
                user4: '',
                user5: '',
                region: '',
                value1: ''
            }
        }
    },
    methods: {
        handleSearch () {
            console.log('search!')
        }
    }
}
</script>
<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.box {
    margin-bottom: 20px;
}
</style>
