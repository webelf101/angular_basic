import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Order} from '../models/order';
import {environment} from '../../../environments/environment';
import {PagedList} from '../models/pagedList';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiEndpoint + '/orders';

  constructor(private http: HttpClient) { }

  getOrders(currentPage: number, itemsPrPage: number): Observable<PagedList<Order>> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<PagedList<Order>>(this.apiUrl, {params: params});
  }

  updateOrder(order: Order): Observable<Order>  {
    return this.http.put<Order>(this.apiUrl + '/' + order.id, order);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order> (this.apiUrl + '/' + id);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id, { responseType: 'text'});
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

}
