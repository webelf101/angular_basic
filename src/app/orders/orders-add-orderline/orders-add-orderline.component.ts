import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/models/product';
import {OrderLine} from '../../shared/models/orderLine';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-orders-add-orderline',
  templateUrl: './orders-add-orderline.component.html',
  styleUrls: ['./orders-add-orderline.component.scss']
})
export class OrdersAddOrderlineComponent implements OnInit {
  @Output() olOut = new EventEmitter<OrderLine>();
  selectedProduct: Product;
  amountForm = new FormGroup({
    count: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.amountForm.patchValue({
      count: 1
    });
  }

  selectProd(product: Product) {
    this.selectedProduct = product;
  }

  cancel() {
    this.olOut.emit(undefined);
  }

  addOrderLine() {
    const orderLine = new OrderLine();
    orderLine.product = this.selectedProduct;
    orderLine.qty = this.amountForm.value.count;
    orderLine.priceWhenBought = this.selectedProduct.price;
    orderLine.orderId = 0;
    this.olOut.emit(orderLine);
  }

}
