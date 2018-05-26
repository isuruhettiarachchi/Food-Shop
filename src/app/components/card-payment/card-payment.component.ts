import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardPayment } from '../../shared/card-payment.model';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  output;
  model = new CardPayment('card', null, null, null, this.cartService.cartTotal);

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.output = JSON.stringify(this.model);
    console.log(this.output);
  }

}
