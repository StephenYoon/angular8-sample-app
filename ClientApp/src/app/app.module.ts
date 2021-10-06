import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Materials and PrimeNg
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

// Components
import { LoginComponent } from './components/login';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { OfferAdminComponent } from './components/offer-admin/offer-admin/offer-admin.component';
import { OfferAdminSummaryComponent } from './components/offer-admin/offer-admin-summary/offer-admin-summary.component';
import { OfferAdminProductsComponent } from './components/offer-admin/offer-admin-products/offer-admin-products.component';
import { OfferAdminPeriodComponent } from './components/offer-admin/offer-admin-period/offer-admin-period.component';
import { OfferAdminExclusionDatesComponent } from './components/offer-admin/offer-admin-exclusion-dates/offer-admin-exclusion-dates.component';
import { OfferAdminPricingComponent } from './components/offer-admin/offer-admin-pricing/offer-admin-pricing.component';
import { OfferAdminTechniciansComponent } from './components/offer-admin/offer-admin-technicians/offer-admin-technicians.component';

import { OfferListingComponent } from './components/offer-listing/offer-listing.component';

// Directive
import { NumericDirective } from './directives/numeric.directive';
import { DefaultImageDirective } from './directives/default-image.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

// Helpers
import { JwtInterceptor, ErrorInterceptor } from './helpers';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { ValidateCsvTimeRangeDirective } from './directives/validate-csv-time-range.directive';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    PageNotFoundComponent,
    OfferListingComponent,
    OfferAdminComponent,
    OfferAdminSummaryComponent,
    OfferAdminProductsComponent,
    OfferAdminPeriodComponent,
    OfferAdminExclusionDatesComponent,
    OfferAdminPricingComponent,
    OfferAdminTechniciansComponent,
    NumericDirective,
    DefaultImageDirective,
    ClickOutsideDirective,
    ValidateCsvTimeRangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,

    BrowserAnimationsModule,
    MatMomentDateModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    CalendarModule,
    SliderModule,
    CheckboxModule,
    InputSwitchModule,
    InputTextModule,
    CardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: NG_VALIDATORS, useExisting: ValidateCsvTimeRangeDirective, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
