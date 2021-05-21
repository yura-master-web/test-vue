<template lang="pug">
.select-dropdown(v-if="isOpen", ref="dropdown")
    .select-option(v-for="(option, index) in options", :key="index", @click="emitSelectOption(option)")
        | {{ option }}
</template>

<script>
export default {
    name: 'DropDown',
    props: {
        selected: {
            type: [String],
            default: '',
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        emitSelectOption(option) {
            this.$emit('selectOption', option)
        },
    },
}
</script>

<style lang="scss" scoped></style>
