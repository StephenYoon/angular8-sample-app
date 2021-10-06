# ASP.NET Core with Angular
Proof-of-concept Angular application to support the admin functions of creation/editing offers.

## Prerequisites:
- Visual Studio 2019
- Visual Studio Code (optional for developing the ClientApp)
- .NET Core 3.1 (https://dotnet.microsoft.com/download/dotnet-core/3.1)
- Node.js (https://nodejs.org/en/)
- Angular installed (in command prompt run this statement: `npm install -g @angular/cli`)

## Solution Overview:
- `ClientApp` Angular8 application to build out the admin screens for creating/viewing/editing things 
- `SpaApi` .NET Core Api for uploading files and images to AWS S3 bucket

## Deploying to github pages:
`npm install -g angular-cli-ghpages`  
`ng build --prod --base-href="https://stephenyoon.github.io/angular8-sample-app/"`  
`angular-cli-ghpages --dir=dist`
  
Deploys to: https://stephenyoon.github.io/angular8-sample-app/
