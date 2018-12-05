import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-login-failed',
  templateUrl: './login-failed.component.html',
  styleUrls: ['./login-failed.component.scss']
})
export class LoginFailedComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
