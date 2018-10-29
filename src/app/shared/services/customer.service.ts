import { Injectable } from '@angular/core';
import {Customer} from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // Handle DATA!!!
  customers: Customer[];

  constructor() {
    this.customers = [
      {id: 1, firstName: 'John', lastName: 'Johnson', address: 'home'},
      {id: 2, firstName: 'Bill', lastName: 'Billson', address: 'work'}];
  }

  getCustomers(): Customer[] {
    // TODO Call Rest API later!!!!
    return this.customers;
  }

  addCustomer(customer: Customer) {
    // TODO Call Rest API later!!!!
    this.customers.push(customer);
  }

  getCustomerById(id: number) {
    return this.customers.find(cust => cust.id === id);
  }
  // CRUD and more!
}
