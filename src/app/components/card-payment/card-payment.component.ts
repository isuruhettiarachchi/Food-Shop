import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardPayment } from '../../shared/card-payment.model';
import { Payment } from '../../shared/payment.model';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  output;
  model;

  constructor(private cartService: CartService) {
    this.model = new CardPayment('card', null, null, null, this.cartService.cartTotal);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.output = new Payment(JSON.stringify(this.cartService.products), JSON.stringify(this.model));
    this.cartService.flushCart();
    console.log(this.output);
  }

}
