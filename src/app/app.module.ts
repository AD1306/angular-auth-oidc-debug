import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterLoginComponent } from './components/after-login/after-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
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
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
