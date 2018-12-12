import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PagedList} from '../models/pagedList';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiEndpoint + '/products';

  constructor(private http: HttpClient) { }

  getProducts(currentPage: number, itemsPrPage: number): Observable<PagedList<Product>> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<PagedList<Product>>(this.apiUrl, {params: params});
  }

  getAllProducts(): Observable<PagedList<Product>> {
    return this.http.get<PagedList<Product>>(this.apiUrl);
  }
}
