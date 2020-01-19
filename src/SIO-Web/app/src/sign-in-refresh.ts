import { UserManager, WebStorageStateStore } from 'oidc-client';
import settings from '@/services/user-manager/user-manager-settings';

async function run(): Promise<void> {
  try {
    new UserManager(settings).signinSilentCallback();
    window.location.replace('/');
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
}

run();
