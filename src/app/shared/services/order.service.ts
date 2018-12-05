import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FilteredProductList} from '../models/filteredProductList';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Customer} from '../models/customers';
import {Order} from '../models/order';
import {environment} from '../../../environments/environment';
import {FilteredCustomerList} from '../models/filteredCustomerList';
import {FilteredOrderList} from '../models/filteredOrderList';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiEndpoint + '/orders';

  constructor(private http: HttpClient) { }

  getOrders(currentPage: number, itemsPrPage: number): Observable<FilteredOrderList> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<FilteredOrderList>(this.apiUrl, {params: params});
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

}
