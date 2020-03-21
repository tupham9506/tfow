// import { getDataFromToken } from '~/helpers/auth';

/**
 * Handle cookie on serverside
 */
export default function ({ app, store, redirect }) {
  const token = app.$cookies.get('tflow.github.token');
  store.commit('github/auth/updateToken', token);
}
