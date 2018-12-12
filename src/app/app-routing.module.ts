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
import {OrdersAddComponent} from './orders/orders-add/orders-add.component';
import {OrdersListComponent} from './orders/orders-list/orders-list.component';
import {OrdersDetailComponent} from './orders/orders-detail/orders-detail.component';
import {OrdersUpdateComponent} from './orders/orders-update/orders-update.component';

const routes: Routes = [
  { path: 'customers/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'customer-update/:id',
    component: CustomerUpdateComponent,
    canActivate: [AdminGuard, SuperAdminGuard]
  },
  { path: 'customer-add',
    component: CustomerAddComponent,
    canActivate: [SuperAdminGuard]
  },
  { path: 'customers',
    component: CustomersListComponent
  },
  { path: 'orders/:id',
    component: OrdersDetailComponent
  },
  { path: 'orders-update/:id',
    component: OrdersUpdateComponent
  },
  { path: 'orders-add',
    component: OrdersAddComponent
  },
  { path: 'orders',
    component: OrdersListComponent
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
