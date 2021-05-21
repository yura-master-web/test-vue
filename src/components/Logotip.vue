<template lang="pug">
include ../plugins/mixins.pug
+b.logo
    +e.name Simple App
    +b('svg').logotip(
        version="1.1",
        xmlns="http://www.w3.org/2000/svg",
        xmlns:xlink="http://www.w3.org/1999/xlink",
        x="0px",
        y="0px",
        viewbox="0 0 165.9 21.3"
    )
        +e('use').item(xlink:href="#logo-start")
        +e('use').item._domen(xlink:href="#logo-end")
</template>

<script>
export default {
    name: 'Logotip',
}
</script>

<style lang="scss" scoped>
.logo {
    &__name {
        position: absolute;
        display: block;
        overflow: hidden;
        text-indent: -9000px;
    }
}
.logotip {
    width: 165.9px;
    height: 21.3px;
    &__item {
        fill: #272c34;
        &_domen {
            fill: #4e84f4;
        }
    }
}
</style>
