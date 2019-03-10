import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'
import { resolve } from 'url';
import { reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '吴宇'
    }
  },
  mutations: {
    [types.SET_USER_INFO] (state, name) {
      state.userInfo = name
    }
  },
  actions: {
    Login ({ commit }) {
      
    }
  }
})
