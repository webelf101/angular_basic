import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './customers/customer-update/customer-update.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminGuard} from './auth/guards/admin.guard';
import {AuthGuard} from './auth/guards/auth.guard';
import {NoAccessComponent} from './shared/no-access/no-access.component';
import {SuperAdminGuard} from './auth/guards/super-admin.guard';

const routes: Routes = [
  { path: 'customers/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'customer-update/:id',
    component: CustomerUpdateComponent,
    canActivate: [AdminGuard]
  },
  { path: 'customer-add',
    component: CustomerAddComponent,
    canActivate: [SuperAdminGuard]
  },
  { path: 'customers',
    component: CustomersListComponent
  },
  { path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: 'no-access',
    component: NoAccessComponent,
    data: { title: 'No Access' }
  },
  { path: '',
    component: WelcomeComponent
  }
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
