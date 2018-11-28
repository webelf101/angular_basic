import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../services/token.service';
import {Observable, Subscribable, Subscription} from 'rxjs';
import {LoginService} from '../services/login.service';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn: boolean;
  constructor(
    private loginService: LoginService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .subscribe(loggedIn => {
        this.loggedIn = !!loggedIn;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout(event) {
    this.loginService.logout()
      .pipe(
        take(1)
      ).subscribe(() => {
        this.loggedIn = false;
    });
  }

}
