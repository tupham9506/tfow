import Vue from 'vue';
import common from '@plugins/common';

export const state = () => ({
});

export const mutations = {
  setList (state, list) {
    Vue.set(state, 'list', list);
  }
};

export const actions = {
  async getList ({ commit }) {
    const url = common.API.GITHUB.REPO;
    const res = await common.request(url);
    console.log(res);
    // if (!res.req_success) {
    //   return false;
    // }
    // const data = Vue._.cloneDeep(res.data, true);
    // commit('github/repo/setList', data);
  }
};
