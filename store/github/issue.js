// import Vue from 'vue';
// import commiton from '@plugins/common';

// export const state = () => ({
//   list: {}
// });

// export const mutations = {
//   setIssue (state, issueList) {
//     let i;
//     for (i in issueList) {
//       Vue.set(state.list, issueList[i].number, issueList[i]);
//     }
//   }
// };

// export const actions = {
//   async getList ({ commit, dispatch }, { fullName, page }) {
//     if (!page) {
//       page = 1;
//     }
//     const res = await common.request({
//       url: common.API.GITHUB.ISSUE,
//       data: {
//         state: 'all',
//         page,
//         per_page: 100,
//         full_name: fullName
//       }
//     });
//     if (!res.req_success) {
//       return false;
//     }

//     const data = res.data;
//     const issueList = data.filter((item) => {
//       return !item.pull_request;
//     });

//     commit('setIssue', issueList);

//     if (data.length >= 100) {
//       page++;
//       await dispatch('github/issue/getList', { fullName, page });
//     }
//   }
// };
