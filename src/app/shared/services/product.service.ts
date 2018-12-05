import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FilteredCustomerList} from '../models/filteredCustomerList';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FilteredProductList} from '../models/filteredProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiEndpoint + '/products';

  constructor(private http: HttpClient) { }

  getCustomers(currentPage: number, itemsPrPage: number): Observable<FilteredProductList> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<FilteredProductList>(this.apiUrl, {params: params});
  }
}
