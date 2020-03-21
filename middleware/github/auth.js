/**
 * Handle when authenticate
 */
export default function ({ app, store, redirect, route }) {
  // Not auth, redirect to login
  if (!store.state.github.user.token) {
    if (route.path !== '/github/login') {
      redirect('/github/login');
    }
    return false;
  }

  if (route.path === '/github/login') {
    redirect('github/');
    return true;
  }
}
