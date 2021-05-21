<template lang="pug">
include ../plugins/mixins.pug
+b.default-template
    +e.header
        Logotip
        router-link.btn(to="/") вернуться к публичной части.
    +e.left-sb
        SideBarMenu(:menu="menu")
    +e.content
        router-view
</template>

<script>
import Logotip from '@/components/Logotip'
import SideBarMenu from '@/components/SideBarMenu'
const prefix = '/settings'
export default {
    name: 'AppSettings',
    components: {
        Logotip,
        SideBarMenu,
    },
    data: () => ({
        menu: [
            {
                name: 'Группы пользователей',
                path: `${prefix}/users-groups`,
            },
            {
                name: 'Пользователи',
                path: `${prefix}/users`,
            },
        ],
    }),
}
</script>

<style lang="scss" scoped>
.default-template {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    min-height: 100vh;
    &__header {
        border-bottom: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        grid-column: 1 / 3;
    }
    &__left-sb {
        border-right: 1px solid lightgray;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    &__content {
        padding: 30px;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
}
</style>
