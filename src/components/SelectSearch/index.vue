<template lang="pug">
.select.search(ref="select", v-click-outside="hideList", :class="{ active: isOpen }")
    s-display(
        :key="selected + updateCD",
        :value="selected",
        :placeholder="placeholder",
        @clickDisplay="clickDisplay",
        @search="onSearch",
        @searchEnter="emitSearchEnter"
    )
    s-dropdown(:isOpen="isOpen", :options="filterOption", @selectOption="selectOption")
</div>
</template>

<script>
import Display from './Display'
import DropDown from './DropDown'
import ClickOutside from 'vue-click-outside'
export default {
    name: 'SelectSearch',
    components: {
        's-display': Display,
        's-dropdown': DropDown,
    },
    directives: {
        ClickOutside,
    },
    props: {
        placeholder: {
            type: String,
            default: 'Поиск',
        },
        simple: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            default: undefined,
        },
    },
    data() {
        return {
            isOpen: false,
            selected: '',
            searchQuery: '',
            updateCD: '',
        }
    },
    computed: {
        filterOption() {
            if (this.searchQuery) {
                return this.options.filter(option => option.toLowerCase().startsWith(this.searchQuery.toLowerCase()))
            } else {
                return this.options
            }
        },
    },
    methods: {
        clickDisplay() {
            this.isOpen = true
        },
        hideList() {
            this.isOpen = false
        },
        selectOption(val) {
            this.isOpen = false
            this.updateCD = Date.now()
            this.searchQuery = val
            this.selected = val
            this.$emit('selected', val)
        },
        onSearch(search) {
            this.searchQuery = search
        },
        emitSearchEnter() {
            this.$emit('selected', this.searchQuery)
            this.isOpen = false
        },
    },
}
</script>

<style lang="stylus" src="./select.styl"></style>
