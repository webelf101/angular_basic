import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customers';
import {CustomerService} from '../../shared/services/customer.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  count: number;
  pageEvent: PageEvent;
  loading: boolean;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.pageEvent = {
      pageIndex: 0,
      pageSize: 6,
      length: this.count
    };
    // Use the DATA!!!
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.customerService.getCustomers(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize)
      .subscribe(listOfCustomers => {
        this.count = listOfCustomers.count;
        this.customers = listOfCustomers.list;
        this.loading = false;
      });
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(message => {
        this.refresh();
      });
    // this.customers = this.customerService.getCustomers();
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.refresh();
  }
}
