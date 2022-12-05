import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auth-test';
  constructor(private router: Router, private oidcSecurityService: OidcSecurityService) {}
  async ngOnInit() {
    const loginResponse = await firstValueFrom(this.oidcSecurityService.checkAuth('main'));
    console.log(loginResponse);
  }

  async authorize() {
    this.oidcSecurityService.authorize('main');
  }
}
