import {
  LogLevel,
  OpenIdConfiguration,
  StsConfigStaticLoader,
} from 'angular-auth-oidc-client';

export const oidcConfigFactory = () => {
  const oidcConfigs = [getMainConfig()];
  return new StsConfigStaticLoader(oidcConfigs);
};

export function getMainConfig(): OpenIdConfiguration {
  const baseUrl = window.location.origin + window.location.pathname;
  const config1: OpenIdConfiguration = {
    configId: 'main',
    authority: 'https://login.microsoftonline.com/7ff95b15-dc21-4ba6-bc92-824856578fc1/v2.0',
    authWellknownEndpointUrl: 'https://login.microsoftonline.com/common/v2.0',
    redirectUrl: window.location.origin,
    clientId: 'e38ea64a-2962-4cde-bfe7-dd2822fdab32',
    scope: 'openid profile offline_access email api://e38ea64a-2962-4cde-bfe7-dd2822fdab32/access_as_user',
    responseType: 'code',
    silentRenew: true,
    maxIdTokenIatOffsetAllowedInSeconds: 600,
    issValidationOff: true,
    autoUserInfo: false,
    // silentRenewUrl: window.location.origin + '/silent-renew.html',
    useRefreshToken: true,
    logLevel: LogLevel.Debug,
    customParamsAuthRequest: {
      prompt: 'select_account', // login, consent
    },
  }
  return config1;
}
