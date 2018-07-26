<template>
    <div class="main">
        <div class="main-breadcrumb">
            <el-breadcrumb v-if="breadcrumb && breadcrumb.length">
                <el-breadcrumb-item :to="{ path: '/' }"><i class="icon icon-home" /></el-breadcrumb-item>
                <el-breadcrumb-item v-for="title in breadcrumb" :key="title">{{ title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <h2 class="main-title">{{ breadcrumb.length && breadcrumb[breadcrumb.length - 1] }}</h2>
        <div class="main-content">
            <router-view/>
        </div>
        <div>
            <p class="main-footer">本系统由网易无尾熊(杭州)科技有限公司提供技术支持</p>
        </div>
    </div>
</template>

<script>
import * as API from '@@/api';

export default {
    data() {
        return {
            menus: [],
            routeMap: {}
        };
    },
    computed: {
        breadcrumb() {
            const path = this.$route.path;
            const route = this.routeMap[path];
            return ((route || {}).meta || {}).breadcrumb || [];
        }
    },
    created() {
        this.getAllMenu();
    },
    methods: {
        async getAllMenu() {
            try {
                const { data } = await API.getMenu();
                this.menus = data.list;
                this.setBreadcrumbData();
            } catch (err) {
                console.error(err);
            }
        },
        setBreadcrumbData() {
            this.setRouteMap();
            this.setRouteMeta();
        },
        //递归建立name和route索引
        setRouteMap(routes, fullPath) {
            routes = routes || this.$router.options.routes;
            routes.forEach((route) => {
                let _fullPath = fullPath ? `${fullPath}/${route.path}`: route.path;
                this.$set(this.routeMap, _fullPath, route);
                if(route.children && route.children.length) {
                    this.setRouteMap(route.children, _fullPath);
                }
            });
        },
        //根据菜单数据设置路由meta信息
        setRouteMeta(menus, breadcrumb) {
            menus= menus || this.menus;
            menus.forEach((menuObj) => {
                let _breadcrumb = breadcrumb ? [...breadcrumb] : [];
                if(menuObj.title) {
                    _breadcrumb.push(menuObj.title);
                }
                if(menuObj.url) {
                    const route = this.routeMap[menuObj.url];
                    if(route) {
                        route.meta = route.meta || {};
                        route.meta.breadcrumb = _breadcrumb;
                    }
                }
                if(menuObj.children && menuObj.children.length) {
                    this.setRouteMeta(menuObj.children, _breadcrumb);
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(main) {
    height: 100%;
}
@include b(main-breadcrumb) {
    height: 40px;
    padding-left: 16px;
    background: #fff;
    .icon-home {
        color: #00C4C0;
    }
}
@include b(main-content) {
    min-height: 95%;
    padding:0 16px;
}
@include b(main-footer) {
    margin-top: 4px;
    color: #9FA6AF;
    text-align: center;
}
@include b(main-title) {
    position: relative;
    padding-left: 12px;
    margin: 16px;
    line-height: 16px;
    color: #222;
}
@include b(main-title) {
    &::before {
        position: absolute;
        width: 4px;
        height: 16px;
        left: 0;
        content: "";
        background: #00C4C0;
    }
}
</style>
