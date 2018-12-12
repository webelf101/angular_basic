import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/models/order';
import {Product} from '../../shared/models/product';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../shared/services/order.service';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.scss']
})
export class OrdersAddComponent implements OnInit {

  products: Product[];
  orders: Order[];
  loading = true;
  productsForm = new FormGroup({
    productsSelect: new FormControl('')
  });

  constructor(private snackBar: MatSnackBar,
              private orderService: OrderService,
              private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts(1, 10)
      .subscribe(products => {
        this.products = products.list;
        this.loading = false;
      });
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
}
