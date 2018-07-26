<template>
    <aside :class="[{'sidebar--active': active}, 'sidebar']">
        <el-menu class="el-menu-vertical-demo"
            :default-active="displayPage"
            unique-opened>
            <el-submenu v-for="(menu, menuIndex) in menus" 
            :index="menuIndex+''" 
            :key="menuIndex">
                <template slot="title">
                    <i :class="`icon icon-${icons[menuIndex]}`"/>
                    <span>{{ menu.title }}</span>
                </template>
                <el-menu-item v-for="(page, childIndex) in menu.children"
                  :index="page.url"
                  :key="childIndex"
                  @click="goto(page.url)">
                    <template slot="title">
                        <a><span>{{ page.title }}</span></a>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="sidebar-toggle" @click="toggle">
            <i :class="active ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"/>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import * as MUTATION_TYPES from '@/store/mutation-types';

import * as API from '@@/api';

export default {
    data() {
        return {
            menus: [],
            icons: ['order', 'product', 'basic', 'order', 'product', 'basic', 'order', 'product', 'basic']
        };
    },
    computed: {
        ...mapState({
            active: 'sidebarActive'
        }),
        displayPage() {
            return this.$route.path;
        }
    },
    async beforeCreate() {
        await this.$store.dispatch('isLogin');
    },
    created() {
        this.getMenu();
    },
    methods: {
        async getMenu() {
            const { data } = await API.getMenu();
            this.menus = data.list;
        },
        toggle() {
            this.$store.commit(MUTATION_TYPES.TOGGLE_SIDEBAR);
        },
        goto(path) {
            this.$router.push({ path });
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(sidebar) {
    position: absolute;
    left: -216px;
    top: 48px;
    bottom: 0;
    width: 216px;
    overflow: visible;
    background: #fff;
    transition:all .3s;
    
    @include m(active) {
        left: 0;
    }
}

@include b(sidebar-toggle) {    
    display: flex;
    position: absolute;
    top: 50%;
    left: 216px;
    width: 10px;
    height: 50px;
    font-size: 10px;
    margin-top: -60px;
    z-index: 10;
    align-items: center;
    background: #C2C9D0;
    color: #fff;
    cursor: pointer;
}
</style>
