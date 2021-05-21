<template lang="pug">
include ../plugins/mixins.pug
+b.default-template
    +e.header
        Logotip
        SelectSearch(:options="options", @selected="selectValue")
        button.btn(type="button") Выход
    +e.left-sb
        SideBarMenu(:menu="menu")
    +e.content
        Breadcrumb
        router-view
</template>

<script>
import Logotip from '@/components/Logotip'
import SideBarMenu from '@/components/SideBarMenu'
import Breadcrumb from '@/components/Breadcrumb'
import SelectSearch from '@/components/SelectSearch'
export default {
    name: 'AppDefault',
    components: {
        Logotip,
        SideBarMenu,
        Breadcrumb,
        SelectSearch,
    },
    data: () => ({
        menu: [
            {
                name: 'Главная',
                path: '/',
            },
            {
                name: 'Сайт',
                path: '/website',
            },
            {
                name: 'Заявки',
                path: '/requests',
            },
            {
                name: 'Настройки',
                path: '/settings',
            },
        ],
        options: ['Москва', 'Владимир', 'Серпухов', 'Владивосток', 'Минкс', 'Оренбург'],
    }),
    methods: {
        selectValue(val) {
            console.log('Найти: ', val)
        },
    },
}
</script>

<style lang="scss" scoped>
.default-template {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    &__header {
        border-bottom: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
