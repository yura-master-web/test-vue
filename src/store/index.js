import Vue from 'vue'
import Vuex from 'vuex'

import layouts from './modules/layouts'
import cntViews from './modules/cnt-views'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        layouts,
        cntViews,
    },
})
