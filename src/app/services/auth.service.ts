import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Properties } from '../shared/properties';

import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: boolean;
  public token: any;

  constructor(private apiService: ApiService, private http: HttpClient, private router: Router, private properties: Properties) {
    this.loggedIn = false;
  }

  login(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.login(payload).then((res) => {
        this.setSession(res.body.token);
        this.properties.token = res.body.token;
        this.loggedIn = true;
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.loggedIn = false;
    this.properties.token = null;
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
