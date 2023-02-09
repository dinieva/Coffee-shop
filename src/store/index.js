import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import bests from './bests'
import coffee from './coffee'
import goods from './goods'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        bests,
        coffee,
        goods,
    }
})

export default store