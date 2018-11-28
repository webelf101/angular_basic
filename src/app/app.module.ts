import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TokenService} from './shared/services/token.service';
import {LoginService} from './shared/services/login.service';
import {AdminGuard} from './auth/guards/admin.guard';
import {AuthGuard} from './auth/guards/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import {NoAccessComponent} from './shared/no-access/no-access.component';
import {SuperAdminGuard} from './auth/guards/super-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersListComponent,
    NavbarComponent,
    WelcomeComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [
    TokenService,
    LoginService,
    AuthGuard,
    AdminGuard,
    SuperAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
