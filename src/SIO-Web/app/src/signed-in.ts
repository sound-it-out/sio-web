import { UserManager } from 'oidc-client';
import settings from '@/services/user-manager/user-manager-settings';
import '@/assets/scss/app.scss';

async function run(): Promise<void> {
  try {
    await new UserManager(settings).signinRedirectCallback();
    window.location.replace('/');
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
}

run();
