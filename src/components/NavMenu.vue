<template>
    <el-menu default-active="displayPage"
        class="el-menu-vertical-demo el-menu--dark"
        router="router"
        unique-opened>
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title">
                <span v-text="item.name"></span>
            </template>
            <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
                <el-menu-item :index="sub.componentName" v-text="sub.name" :route="{name:sub.componentName}" />
            </el-menu-item-group>
        </el-submenu>
        <el-submenu :index="3" :key="3">
            <template slot="title">
                <span v-text="列表页"></span>
            </template>
            <el-menu-item-group class="over-hide" :key="demoList">
                <el-menu-item :index="demoList" v-text="列表页" :route="{name:'demoList'}" />
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import menu from '@/config/menu-config'

export default {
    data () {
        return {
            menu: menu
        }
    },
    computed: {
        displayPage () {
            return this.$route.path
        }
    },
    methods: {
        // @open="handleOpen"
        //     @close="handleClose"
        // handleOpen (key, keyPath) {
        //     console.log(key, keyPath)
        // },
        // handleClose (key, keyPath) {
        //     console.log(key, keyPath)
        // }
    }
}
</script>
<style scoped>
.el-menu-vertical-demo {
    display: inline-block;
    text-align: left;
}
/* .tac {
    width: 240px;
} */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
}
</style>
