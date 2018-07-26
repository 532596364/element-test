<template>
    <div>
        <div class="box">
            <h2>线形进度条 — 百分比外显</h2>
            <el-progress :percentage="0"></el-progress>
            <el-progress :percentage="70"></el-progress>
            <el-progress :percentage="80" color="#8e71c7"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
        </div>
        <div class="box">
            <h2>线形进度条 — 百分比内显</h2>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="2"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.box {
    margin-bottom: 20px;
    width: 50%;
}
</style>
<style>
.el-progress {
    margin-bottom: 15px;
}
.el-progress__text {
    margin-left: 16px;
}
</style>
