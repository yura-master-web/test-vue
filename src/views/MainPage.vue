<template lang="pug">
.app-main 
    h1.title-h2 Главная страница
    CntViews
</template>

<script>
import CntViews from '@/components/CntViews'
export default {
    name: 'AppMain',
    components: {
        CntViews,
    },
}
</script>

<style lang="scss" scoped></style>
