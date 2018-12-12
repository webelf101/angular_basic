import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../shared/models/customers';
import {map, startWith} from 'rxjs/operators';
import {OrderService} from '../../shared/services/order.service';
import {CustomerService} from '../../shared/services/customer.service';

@Component({
  selector: 'app-customers-search',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.scss']
})
export class CustomersSearchComponent implements OnInit {
  customers: Customer[];
  filteredCustomers: Customer[];

  filterForm = new FormGroup({
    searchCustomer: new FormControl('')
  });

  @Output() custOut = new EventEmitter<Customer>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers.list;
    })
    this.filterForm.get('searchCustomer').valueChanges
      .pipe(
        startWith(''),
        map(value => {
            return this.filterCustomers(value);
          }
        ))
      .subscribe(filtered => {
        this.filteredCustomers = filtered;
      });
  }

  filterCustomers(val: string): Customer[] {
    return val && val.length > 0 ? this.customers.filter(cust => cust.firstName.toLowerCase().indexOf(val.toLowerCase()) === 0 ||
      cust.lastName.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.customers;
  }

  changeCustomer(customer: Customer) {
    this.custOut.emit(customer);
  }

}
