import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardPayment } from '../../shared/card-payment.model';
import { Payment } from '../../shared/payment.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  output;
  model;

  constructor(private cartService: CartService, private apiService: ApiService, private router: Router) {
    this.model = new CardPayment('card', null, null, null, this.cartService.cartTotal);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.output = new Payment(this.cartService.products, this.model);
    this.apiService.submitPay(JSON.stringify(this.output)).then((res) => {
      console.log(res);
      this.cartService.flushCart();
      this.router.navigateByUrl('/home');
    });
  }

}
