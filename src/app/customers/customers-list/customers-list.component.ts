import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {CustomerService} from '../../shared/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // Use the DATA!!!
    this.customers = this.customerService.getCustomers();
  }

  addCustomer() {
    // data static for now, later we add forms!! :)
    this.customerService.addCustomer({
      id: 3,
      firstName: 'Ole',
      lastName: 'Olsen',
      address: 'theStreet'
    });
  }

}
