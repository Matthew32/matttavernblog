import Vue from 'vue'
import Vuex from 'vuex'
import posts from '@/data/posts'
Vue.use(Vuex)
export default new Vuex.Store(posts)
