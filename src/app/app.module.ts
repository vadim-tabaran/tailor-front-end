import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { EqualValidatorDirective } from './shared/equal-validator.directive';
import { adminRouting } from './app.routing';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsService } from "./alerts/alerts.service";
import { AlertComponent } from './alerts/alert.component';
import { CategoriesComponent } from './categories/categories.component';
import {JsonHttpHelper} from "./shared/json-http-helper.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EqualValidatorDirective,
    AlertsComponent,
    AlertComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    adminRouting
  ],
  providers: [
    AlertsService, JsonHttpHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
