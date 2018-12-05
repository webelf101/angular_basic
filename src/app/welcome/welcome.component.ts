import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';
import {FilteredProductList} from '../shared/models/filteredProductList';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from '../shared/models/order';
import {OrderService} from '../shared/services/order.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the Customer App 2018!!';
  products: Product[];
  orders: Order[];
  loading = true;
  productsForm = new FormGroup({
    productsSelect: new FormControl('')
  });

  constructor(
    private snackBar: MatSnackBar,
    private orderService: OrderService,
    private productService: ProductService) {

  }

  save() {
    const value = this.productsForm.value;
    const order: Order = {
      customer: {id: 1},
      deliveryDate: new Date(),
      orderLines: []
    };
    debugger;
    value.productsSelect.forEach(product => {
      const prod = product as Product;
      order.orderLines.push({
        orderId: 0,
        productId: prod.id,
        priceWhenBought: +prod.price,
        qty: 2
      });
    });

    debugger;
    this.orderService.addOrder(order)
      .subscribe(orderAdded => {
        this.snackBar.open( 'Order with id ' + orderAdded.id + ' Added ', 'Ok', {
          duration: 2000
        });
        this.orderService.getOrders(1, 10)
          .subscribe(orders => {
            this.orders = orders.list;
          });
      },
        err => {
          this.snackBar.open( 'Error ' + err);
        });
  }

  ngOnInit() {
    this.productService.getCustomers(1, 10)
      .subscribe(products => {
        this.products = products.list;
        this.loading = false;
      });
      this.refreshOrders();
  }

  refreshOrders() {
    this.orderService.getOrders(1, 10)
      .subscribe(orders => {
        this.orders = orders.list;
      });
  }

}
