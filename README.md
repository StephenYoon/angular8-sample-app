# ASP.NET Core Razor with Angular
Proof-of-concept Angular application to support the admin functions of creation/editing offers.
  
## Prerequisites:
- ensure you have node.js installed (https://nodejs.org/en/)
- ensure you have Angular installed (in command prompt run this statement: `npm install -g @angular/cli`)

## Solution Overview:
- `ClientApp` Angular8 application to build out the admin screens for creating/viewing/editing offers 
- `SpaApi` .NET Core Api for uploading files and images to AWS S3 bucket

## Deploying to github pages:
`npm install -g angular-cli-ghpages`  
`ng build --prod --base-href="https://stephenyoon.github.io/AspCoreSpa/"`  
`angular-cli-ghpages --dir=dist`
  
Deploys to: https://stephenyoon.github.io/AspCoreSpa/
