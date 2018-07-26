<template>
    <div>
        <h1>徽标</h1>
        <div class="box">
            <h3>基础用法</h3>
            <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>

            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
        <div class="box">
            <h3>小红点</h3>
            <el-badge is-dot class="item">数据查询</el-badge>
                <el-badge is-dot class="item">
                <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
            </el-badge>
        </div>
    </div>
</template>
<script>
</script>
<style>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
