import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../shared/services/customer.service';
import {Order} from '../../shared/models/order';
import {OrderService} from '../../shared/services/order.service';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss']
})
export class OrdersDetailComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(orderFromRest => {
        this.order = orderFromRest;
      });
  }

}
