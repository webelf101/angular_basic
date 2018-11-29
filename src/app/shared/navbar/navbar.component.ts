import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../services/token.service';
import {forkJoin, Observable, of, Subscribable, Subscription} from 'rxjs';
import {LoginService} from '../services/login.service';
import {catchError, switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn: boolean;
  userName: string;
  constructor(
    private loginService: LoginService,
    private tokenService: TokenService) { }

  ngOnInit() {
     this.subscription = this.tokenService.isLoggedIn
      .pipe(
        // Map to
        switchMap(isLoggenIn => {
          this.loggedIn = isLoggenIn;
          return this.tokenService.getUserFromToken();
        })
      ).subscribe(user => {
        this.userName = user ? user.userName : '';
      });
      /*
          this.subscription = this.tokenService.isLoggedIn
            .subscribe(loggedIn => {
              this.loggedIn = loggedIn;
              if (this.loggedIn) {
                this.tokenService.getUserFromToken().subscribe(
                  user => {
                    this.userName = user.userName;
                  }
                );
              }
          });
      */
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
