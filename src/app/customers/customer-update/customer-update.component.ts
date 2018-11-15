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
  id: number;
  loading = true;
  types = [{id: 1, name: 'Super'}, {id: 2, name: 'MAHH'}, {id: 3, name: 'Thief'}];
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(this.id)
      .subscribe(customerFromRest => {
        this.loading = false;
        this.customerForm.patchValue({
          firstName: customerFromRest.firstName,
          lastName: customerFromRest.lastName,
          address: customerFromRest.address
        });
      });
  }

  save() {
    const customer = this.customerForm.value;
    customer.id = this.id;
    this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customers');
      });
  }


}
