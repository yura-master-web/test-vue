import mutations from '@/store/mutations'

const {SET_LAYOUT} = mutations

const layouts = {
    state: {
        layout: '',
    },
    getters: {
        layout(state) {
            return state.layout
        },
    },
    mutations: {
        [SET_LAYOUT](state, payload) {
            state.layout = payload
        },
    },
}

export default layouts
