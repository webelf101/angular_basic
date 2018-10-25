import { Component } from '@angular/core';
import {Customer} from './shared/models/customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1;
  customers: Customer[] = [
    {id: 1, firstName: 'John', lastName: 'Johnson', address: 'home'},
    {id: 2, firstName: 'Bill', lastName: 'Billson', address: 'work'}];

  countUpOne() {
    this.customers.push({
      id: 3,
      firstName: 'new',
      lastName: 'guy',
      address: 'somewhere'
    });
  }
}
