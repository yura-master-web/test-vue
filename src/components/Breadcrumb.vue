<template lang="pug">
.breadcrumb
    ul.breadcrumb-list
        li(v-for="(breadcrumb, idx) in breadcrumbList", :key="idx")
            template(v-if="breadcrumbList.length !== idx + 1")
                router-link.linked(:to="breadcrumb.link") {{ breadcrumb.name }}
                span /
            template(v-else)
                p {{ breadcrumb.name }}
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {breadcrumbList: []}
    },
    watch: {
        $route: {
            handler: 'updateList',
        },
    },
    mounted() {
        this.updateList()
    },
    methods: {
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb
        },
    },
}
</script>

<style lang="scss" scoped>
.breadcrumb-list {
    margin-bottom: 20px;
    display: flex;
    li {
        margin-right: 10px;
        a.linked {
            text-decoration: underline;
            cursor: pointer;
            color: blue;
        }
        span {
            margin-left: 10px;
        }
    }
}
</style>
