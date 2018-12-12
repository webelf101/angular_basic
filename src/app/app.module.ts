import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TokenService} from './shared/services/token.service';
import {LoginService} from './shared/services/login.service';
import {AdminGuard} from './auth/guards/admin.guard';
import {AuthGuard} from './auth/guards/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import {NoAccessComponent} from './shared/no-access/no-access.component';
import {SuperAdminGuard} from './auth/guards/super-admin.guard';
import { LoginFailedComponent } from './auth/login/login-failed/login-failed.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersAddComponent } from './orders/orders-add/orders-add.component';
import { OrdersDetailComponent } from './orders/orders-detail/orders-detail.component';
import { OrdersUpdateComponent } from './orders/orders-update/orders-update.component';
import { CustomersSearchComponent } from './customers/customers-search/customers-search.component';
import { OrdersAddOrderlineComponent } from './orders/orders-add-orderline/orders-add-orderline.component';
import { ProductsSearchComponent } from './products/products-search/products-search.component';

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
    NoAccessComponent,
    LoginFailedComponent,
    OrdersListComponent,
    OrdersAddComponent,
    OrdersDetailComponent,
    OrdersUpdateComponent,
    CustomersSearchComponent,
    OrdersAddOrderlineComponent,
    ProductsSearchComponent
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
    MatPaginatorModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormsModule
  ],
  providers: [
    TokenService,
    LoginService,
    AuthGuard,
    AdminGuard,
    SuperAdminGuard
  ],
  entryComponents: [
    LoginFailedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
