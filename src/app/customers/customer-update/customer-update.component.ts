import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../shared/services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const customer = this.customerService.getCustomerById(id);
    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address
    });
  }

  save() {
    /*const customer = this.customerForm.value;
    this.customerService.updateCustomer(customer);*/
  }


}
