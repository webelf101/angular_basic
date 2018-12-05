import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';
import {MatSnackBar} from '@angular/material';
import {LoginFailedComponent} from './login-failed/login-failed.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @HostBinding('style.height') height: string;

  loginGroup: FormGroup;
  constructor(private auth: LoginService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.height = '100%';
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      remember: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginGroup.value).subscribe(token => {
      if (token) {
        this.router
          .navigateByUrl('/');
      }
    }, err => {
      this.snackBar.openFromComponent( LoginFailedComponent, {
        data: err.error,
        duration: 2000,
        horizontalPosition: 'left',
        verticalPosition: 'top'
      });
    });
  }

}
