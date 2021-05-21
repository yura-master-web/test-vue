<template lang="pug">
#app
    component(:is="layout")
    notifications
</template>

<script>
import AppDefault from '@/layouts/AppDefault'
import AppSettings from '@/layouts/AppSettings'
import mutations from '@/store/mutations'
const {SET_LAYOUT} = mutations
import {mapGetters} from 'vuex'

export default {
    components: {
        'app-default': AppDefault,
        'app-settings': AppSettings,
    },
    computed: {
        ...mapGetters(['layout']),
    },
    watch: {
        '$route.query': {
            handler: 'onChangeLyaout',
            deep: true,
        },
    },
    methods: {
        onChangeLyaout() {
            this.$notify({
                title: this.$route.meta.name,
            })
            if (this.$route.path.includes('/settings')) {
                this.$store.commit(SET_LAYOUT, 'app-settings')
            } else {
                this.$store.commit(SET_LAYOUT, 'app-default')
            }
        },
    },
}
</script>

<style lang="stylus">
#app
    font-family Avenir, Helvetica, Arial, sans-serif
    color #2c3e50
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
