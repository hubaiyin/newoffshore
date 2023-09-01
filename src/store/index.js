import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bread from './bread';
import charts from './charts';

export default new Vuex.Store({
    modules: {
        bread,
        charts
    }
})