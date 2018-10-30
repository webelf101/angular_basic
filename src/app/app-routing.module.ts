import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './customers/customer-update/customer-update.component';

const routes: Routes = [
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customer-update/:id', component: CustomerUpdateComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
