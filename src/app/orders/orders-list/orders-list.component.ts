import { Component, OnInit } from '@angular/core';
import {MatSnackBar, PageEvent} from '@angular/material';
import {OrderService} from '../../shared/services/order.service';
import {ProductService} from '../../shared/services/product.service';
import {Customer} from '../../shared/models/customers';
import {CustomerService} from '../../shared/services/customer.service';
import {Order} from '../../shared/models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  count: number;
  pageEvent: PageEvent;
  loading: boolean;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.pageEvent = {
      pageIndex: 0,
      pageSize: 6,
      length: this.count
    };
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.orderService.getOrders(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize)
      .subscribe(pagedList => {
        this.count = pagedList.count;
        this.orders = pagedList.list;
        this.loading = false;
      });
  }

  delete(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(message => {
        this.refresh();
      });
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.refresh();
  }

}
