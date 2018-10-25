import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = [
      {id: 1, firstName: 'John', lastName: 'Johnson', address: 'home'},
      {id: 2, firstName: 'Bill', lastName: 'Billson', address: 'work'}];
  }

  countUpOne() {
    this.customers.push({
      id: 3,
      firstName: 'new',
      lastName: 'guy',
      address: 'somewhere'
    });
  }

}
