<template lang="pug">
.select-button(@click.stop="clickDisplay")
    label.field-label
        input.select-value(
            v-model="input",
            type="text",
            :placeholder="placeholder",
            @keyup.enter="emitSearch"
        )
    .select-arrow(:style="'/img/icons/icon-arrow-select.svg'")
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Select value',
        },
        value: {
            type: String,
            default: '',
        },
    },
    computed: {
        input: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('search', val)
                this.$emit('clickDisplay')
            },
        },
    },
    methods: {
        clickDisplay() {
            this.$emit('clickDisplay')
        },
        emitSearch() {
            this.$emit('searchEnter')
        },
    },
}
</script>
