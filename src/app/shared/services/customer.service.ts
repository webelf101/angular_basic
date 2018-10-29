import { Injectable } from '@angular/core';
import {Customer} from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // Handle DATA!!!
  customers: Customer[];
  id = 1;

  constructor() {
    this.customers = [
      {id: this.id++, firstName: 'John', lastName: 'Johnson', address: 'home'},
      {id: this.id++, firstName: 'Bill', lastName: 'Billson', address: 'work'}];
  }

  getCustomers(): Customer[] {
    // TODO Call Rest API later!!!!
    return this.customers;
  }

  addCustomer(customer: Customer) {
    // TODO Call Rest API later!!!!
    customer.id = this.id++;
    this.customers.push(customer);
  }

  getCustomerById(id: number) {
    return this.customers.find(cust => cust.id === id);
  }
  // CRUD and more!
}
