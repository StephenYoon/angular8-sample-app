import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { OfferAdminComponent } from './components/offer-admin/offer-admin/offer-admin.component';
import { OfferListingComponent } from './components/offer-listing/offer-listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './helpers';

const appRoutes: Routes = [
  { path: 'home', component: OfferListingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'offer/:offerId', component: OfferAdminComponent },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
