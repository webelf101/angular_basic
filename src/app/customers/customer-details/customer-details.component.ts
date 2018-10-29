import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor() { }

  ngOnInit() {
    this.customer = {
      id: 22,
      firstName: 'Egon',
      lastName: 'Olsen',
      address: 'tord strasse'
    };
  }

}
