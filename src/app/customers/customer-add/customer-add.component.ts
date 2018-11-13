import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../shared/services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  types = [{id: 1, name: 'Super'}, {id: 2, name: 'MAHH'}, {id: 3, name: 'Thief'}];
  friends = [{id: 1, name: 'Ole'}, {id: 2, name: 'Bob'}];
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    friend: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {}

  save() {
    const customer = this.customerForm.value;
    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customers');
      });
  }

}
