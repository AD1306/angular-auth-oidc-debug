# AuthTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## About Project 

- This project uses hash based navigation. 
- This project is used for debugging purposes against https://github.com/damienbod/angular-auth-oidc-client/issues/1623.


## Steps to reproduce

- Run development server through `ng serve` or `npm start` on `http://localhost:4200/`. 
- Make sure to keep console log/network open to keep an eye on debug logs.
- The home page should just have a text and a simple button with label `Login`. Click on `Login` button to start the code flow.
- After you've logged in, check the console logs and it should still have authenticated result to false.

## Code Structure 
- `app.module.ts` is where the configs are loaded.
- `app.component.ts` is where the initial app loads.
- `after-login.component.ts` is where the flow should take us based on the code in `app.component.ts`. 
- Disregard `factory-loader.ts` for now that is for another issue. 