import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Customer} from '../../shared/models/customers';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  types = [{id: 1, name: 'Super'}, {id: 2, name: 'MAHH'}, {id: 3, name: 'Thief'}];
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {}

  save() {
    const customerFromFields = this.customerForm.value;
    const customer = {
      firstName: customerFromFields.firstName,
      lastName: customerFromFields.lastName,
      address: customerFromFields.address,
      type: {id: customerFromFields.type}
    };
    this.customerService.addCustomer(customer as Customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customers');
      });
  }

}
