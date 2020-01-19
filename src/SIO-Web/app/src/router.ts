import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/routes';
import UserManager from '@/services/user-manager/user-manager';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ ...routes ],
});

router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Sound It Out`;
});

router.beforeEach(async (to, from, next) => {
await UserManager.clearStaleState();
const user = await UserManager.getUser();
const isLoggedIn = user != null;
if ((!isLoggedIn || user!.expired) && to.meta.requiresAuthentication) {
  await UserManager.signinRedirect();
  return;
}

next();
});

export default router;
