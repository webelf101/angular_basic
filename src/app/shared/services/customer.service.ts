import { Injectable } from '@angular/core';
import {Customer} from '../models/customers';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilteredCustomerList} from '../models/FilteredCustomerList';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://custapp2018.azurewebsites.net/api/customers';

  constructor(private http: HttpClient) {  }

  getCustomers(currentPage: number, itemsPrPage: number): Observable<FilteredCustomerList> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<FilteredCustomerList>(this.apiUrl, {params: params});
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer>  {
    return this.http.put<Customer>(this.apiUrl + '/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }
  // CRUD and more!
}
