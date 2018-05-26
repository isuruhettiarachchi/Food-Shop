import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const serverAddress = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  foodListEndPoint: String = '/api/foods';
  paymentEntPoint: String = '/api/payments';

  constructor(
    private http: HttpClient
  ) { }

  // get food list from server
  public getFoodList(): Promise<any> {
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
      this.post(serverAddress + this.paymentEntPoint, payload).then((res) => {
        resolve(res);
      }).catch(err => {
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

  private post(url, payload): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, {
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
}
