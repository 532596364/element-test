<template>
    <div id="app">
        <el-container>
            <el-header class="header">
                <header-block />
            </el-header>
            <el-container>
                <el-aside width="245px">
                    <nav-menu />
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import HeaderBlock from '@/components/Header'

export default {
    name: 'App',
    components: {
        NavMenu,
        HeaderBlock
    }
}
</script>

<style>
.header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
