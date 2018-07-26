<template>
    <div :class="[{'body--active': !active}, 'body']">
        <router-view/>
    </div>
</template>

<script>
// Body空组件是为了实现router的多级结构,两层children,因为两层需要两个router-view
import { mapState } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            active: 'sidebarActive'
        })
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(body) {        
    position: absolute;
    left: 216px;
    top: 48px;
    right: 0;
    bottom: 0;
    background: #EAEDF3;
    overflow: auto;
    transition: all .3s;
    @include m(active) {
        left: 0;
    }
}
</style>
