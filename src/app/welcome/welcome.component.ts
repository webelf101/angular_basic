import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  products: Product[];
  count: number;
  pageEvent: PageEvent;
  loading: boolean;

  constructor(private productService: ProductService) {}


  refresh() {
    this.loading = true;
    this.productService.getProducts(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize)
      .subscribe(pagedList => {
        this.count = pagedList.count;
        this.products = pagedList.list;
        this.loading = false;
      });
  }

  ngOnInit() {
    this.pageEvent = {
      pageIndex: 0,
      pageSize: 6,
      length: this.count
    };
    this.refresh();
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.refresh();
  }
}
