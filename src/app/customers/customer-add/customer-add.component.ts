import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {}

  addCustomer() {
    this.customerService.addCustomer({
      id: 3,
      firstName: 'Ole',
      lastName: 'Olsen',
      address: 'theStreet'
    });
  }

}
