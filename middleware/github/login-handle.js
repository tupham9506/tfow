/**
 * Handle cookie on serverside
 */
export default function ({ app, store, redirect }) {
  const token = app.$cookies.get('tflow.github.user.token');
  store.commit('github/user/updateToken', token);
}
