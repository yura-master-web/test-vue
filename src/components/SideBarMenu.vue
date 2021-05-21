<template lang="pug">
include ../plugins/mixins.pug
+b('ul').sidebar-menu
    +e('li').item(v-for="item in menu", :key="item.name", :class="{ active: $route.path === item.path }")
        +e('router-link').link.tdn(:to="item.path") {{ item.name }}
</template>

<script>
export default {
    name: 'SideBarMenu',
    props: {
        menu: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="stylus" scoped>
.sidebar-menu
    margin-top 20px

    &__item
        padding 10px 5px 10px 15px

        &.active ^[0]__link
            color green

    &__link
        color blue
</style>
