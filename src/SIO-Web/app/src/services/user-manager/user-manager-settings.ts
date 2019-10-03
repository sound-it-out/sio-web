import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

const settings: UserManagerSettings = {
    authority: process.env.VUE_APP_IDENTITY_AUTHORITY_URL,
    client_id: 'web',
    redirect_uri: window.location.origin + '/signed-in.html',
    response_type: 'code',
    scope: 'openid profile api',
    post_logout_redirect_uri: window.location.origin,
    automaticSilentRenew: true,
    silent_redirect_uri: window.location.origin + '/sign-in-refresh.html',
    revokeAccessTokenOnSignout: true,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
};

export default settings;
