import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Properties } from '../shared/properties';

const serverAddress = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  foodListEndPoint: String = '/api/foods';
  paymentEntPoint: String = '/api/payments';
  signinEndPoint: String = '/api/users/signin';

  constructor(
    private http: HttpClient,
    private properties: Properties
  ) { }

  // get food list from server
  public getFoodList(): Promise<any> {
    console.log('getfoodlist');
    return new Promise((resolve, reject) => {
      this.get(serverAddress + this.foodListEndPoint).then(res => {
        console.log('res', res);
        resolve(res.body);
      }).catch(err => {
        console.log('err', err);
        reject(err);
      });
      // console.log(this.http.get(serverAddress + this.foodListEndPoint));
      // return (this.http.get(serverAddress + this.foodListEndPoint));
    });
  }

  public submitPay(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      this.psot_verify(serverAddress + this.paymentEntPoint, payload, this.properties.token).then((res) => {
        console.log(res);
        resolve(res);
      }).catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }


  public login(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post_login(serverAddress + this.signinEndPoint, payload).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  // get method
  private get(url): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json'
        })
      })
      .subscribe(
        response => {
          console.log(response);
          resolve(response);
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  private post_login(url, payload): Promise<any> {
    console.log('post method ', payload, ' url ', url);
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      })
      .subscribe(
        response => {
          console.log('res', response);
          resolve(response);
        },
        error => {
          console.log('err', error);
          reject(error);
        }
      );
    });
  }

  private psot_verify(url, payload, token): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, {
        observe: 'response',
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + token
        })
      })
      .subscribe(
        response => {
          console.log(response);
          resolve(response);
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }
}
