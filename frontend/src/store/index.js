import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isReminder: false,
    remindHour: 0,
    remindMin: 0
  },
  mutations: {
    setReminder(state, trigger) {
      if (trigger == true) {
        state.isReminder = true
      } else {
        state.isReminder = false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
