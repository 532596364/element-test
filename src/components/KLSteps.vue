<template>
    <div>
        <div class="box">
            <h2>基础用法</h2>
            <el-steps :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
        <div class="box">
            <h2>有描述的步骤条</h2>
            <el-steps :active="active1">
                <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 3" description="这段就没那么长了"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
        </div>
        <div class="box" style="height: 300px;">
            <h2>竖式步骤条</h2>
            <el-steps direction="vertical" :active="active2">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next2">下一步</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: 1,
            active1: 0,
            active2: 0
        }
    },
    methods: {
        next () {
            if (this.active++ > 2) this.active = 1
        },
        next1 () {
            if (this.active1++ > 2) this.active1 = 0
        },
        next2 () {
            if (this.active2++ > 2) this.active2 = 0
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
