import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Observable, Subject} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  public loggedInSubject = new Subject<string>();

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.loggedInSubject.next(token);
  }

  public clearToken() {
    localStorage.removeItem('token');
    this.loggedInSubject.next(undefined);
  }

  public isAuthenticated(): Observable<boolean> {
    // get the token
    return Observable.create(obs => {
        obs.next(this.getToken());
    });
  }

  public getUserFromToken(): Observable<User> {
    return Observable.create(obs => {
      const token = this.getToken();
      let decoded: User;
      if (token) {
        const jwt = new JwtHelperService();
        decoded = jwt.decodeToken(token);
        console.log(jwt.decodeToken(token));
      }
      obs.next(decoded);
    });

  }
}
