import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
Vue.use(Vuex)

const state = {
    stretchingList: []
}

const actions = {

    async getAllStretchings({ commit }) {
        const resp = await api.getAllStretchings()
            .then(res => {
                if (res.status === 200) {

                    return res.data;
                }
            }).catch(err => {
                console.log(err) // eslint-disable-line no-console
            })

        //state.stretchingList = resp;
        commit('setAllStretchings', resp);
    },
    async search({ state }, keyword) {
        console.log(keyword) // eslint-disable-line no-console

        const resp = await api.search(keyword).then(res => {
            if (res.status === 200) {
                console.log(res.data) // eslint-disable-line no-console
                return res.data;
            }
        }).catch(err => {
            console.log(err) // eslint-disable-line no-console
        })

        console.log(resp) // eslint-disable-line no-console
        state.stretchingList = resp;
        console.log(state.stretchingList) // eslint-disable-line no-console
    }
};

const mutations = {
    setAllStretchings(state, result) {
        // console.log("뮤테이션", result); // eslint-disable-line no-console
        // state.stretchingList = result.data;
        state.stretchingList = result.map(m => m);
    }
}

export default {
    namesapced: true,
    state,
    actions,
    mutations
}