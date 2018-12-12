import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  filterForm = new FormGroup({
    search: new FormControl('')
  });

  @Output() prodOut = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.filteredProducts = this.products = products.list;
    })
    this.filterForm.get('search').valueChanges
      .pipe(
        startWith(''),
        map(value => {
            return this.filterCustomers(value);
          }
        ))
      .subscribe(filtered => {
        this.filteredProducts = filtered;
      });
  }

  filterCustomers(val: string): Customer[] {
    return val && val.length > 0 ? this.products.filter(prod => prod.name.toLowerCase().indexOf(val.toLowerCase()) === 0 ||
      prod.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.products;
  }

  changeProduct(product: Product) {
    this.prodOut.emit(product);
  }

}
