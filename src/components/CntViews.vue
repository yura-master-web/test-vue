<template lang="pug">
.cnt-views
    | Вы посещаете эту страницу #{' '}
    span {{ cnt }} #{' '}
    | раз
</template>

<script>
import mutations from '@/store/mutations'
const {SET_PAGE} = mutations
export default {
    name: 'CntViews',
    data() {
        return {}
    },
    computed: {
        cnt() {
            return this.$store.getters['linkCnt'](this.$route.fullPath)
        },
    },
    watch: {
        $route: {
            handler: 'updateCnt',
            immediate: true,
            deep: true,
        },
    },
    methods: {
        updateCnt() {
            this.$store.commit(SET_PAGE, this.$route.fullPath)
        },
    },
}
</script>

<style lang="scss" scoped>
.cnt-views {
    margin-top: 20px;
    span {
        font-weight: bold;
    }
}
</style>
