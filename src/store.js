import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'
import { resolve } from 'url';
import { reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '{}')
  },
  mutations: {
    // [types.SET_TOKEN] (state, payload) {
    //   state.token = payload
    // },
    // [types.SET_USER_INFO] (state, payload) {
    //   console.log('payload', payload, state)
    //   state.userInfo = payload
    //   console.log('state:', state.userInfo)
    // }
  },
  actions: {
    Login ({ commit }, payload) {
      // commit(types.SET_USER_INFO, res.data.data)
      // commit(types.SET_TOKEN, res.data.code)
    }
  }
})
