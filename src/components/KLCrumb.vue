<template>
    <div >
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动列表</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动详情</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="margin-top: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-bell"></i></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动列表</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动详情</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
