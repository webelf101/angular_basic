import {Component, OnInit} from '@angular/core';
import {Customer} from './shared/models/customers';
import {CustomerService} from './shared/services/customer.service';
import {TokenService} from './shared/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.isAuthenticated().subscribe().unsubscribe();
  }
}
