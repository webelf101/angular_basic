import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../shared/services/order.service';
import {Order} from '../../shared/models/order';
import {CustomerService} from '../../shared/services/customer.service';
import {concatMap, map, startWith, switchMap, tap} from 'rxjs/operators';
import {Customer} from '../../shared/models/customers';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {OrderLine} from '../../shared/models/orderLine';
import {MatSnackBar} from '@angular/material';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-orders-update',
  templateUrl: './orders-update.component.html',
  styleUrls: ['./orders-update.component.scss']
})
export class OrdersUpdateComponent implements OnInit {
  order: Order;
  addOrderLine = false;
  selectCustomer = false;

  constructor(private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private orderService: OrderService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(orderFromRest => {
        this.order = orderFromRest;
      });
  }


  save() {
    const orderToSave = new Order();
    orderToSave.id = this.order.id;
    orderToSave.customer = {id: this.order.customer.id};
    const oLines: OrderLine[] = [];
    this.order.orderLines.forEach(ol => {
      oLines.push({
        productId: ol.product.id,
        orderId: this.order.id,
        qty: ol.qty,
        priceWhenBought: ol.product.price});
    });
    orderToSave.orderLines = oLines;
    orderToSave.deliveryDate = this.order.deliveryDate;
    orderToSave.orderDate = this.order.orderDate;
    this.orderService.updateOrder(orderToSave)
      .subscribe(order => {
        this.snackBar.open( 'Order with id ' + order.id + ' updated ', 'Ok', {
          duration: 2000
        });
      });
  }

  toggleSelectCustomer() {
    // doIT
    this.selectCustomer = !this.selectCustomer;
  }

  toggleOrderline() {
    this.addOrderLine = !this.addOrderLine;
  }


  addOrderLineToOrder(ol: OrderLine) {
    if (ol) {
      this.order.orderLines.push(ol);
    }
    this.toggleOrderline();
  }

  deleteOL(prodId: number) {
    //
    this.order.orderLines = this.order.orderLines
      .filter(ol => ol.productId !== prodId);
  }

  changeCustomer(customer: Customer) {
    this.order.customer = customer;
    this.toggleSelectCustomer();
  }

  changeOl(ol: OrderLine) {
    const index = this.order.orderLines.indexOf(ol);
    this.order.orderLines[index] = ol;
  }
}
