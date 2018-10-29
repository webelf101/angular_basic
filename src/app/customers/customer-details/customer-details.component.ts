import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {CustomerService} from '../../shared/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerById(1);
  }

}
