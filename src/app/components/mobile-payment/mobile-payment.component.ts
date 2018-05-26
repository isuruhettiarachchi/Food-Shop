import { Component, OnInit } from '@angular/core';
import { MobilePayment } from '../../shared/mobile-payment.model';
import { Payment } from '../../shared/payment.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-mobile-payment',
  templateUrl: './mobile-payment.component.html',
  styleUrls: ['./mobile-payment.component.css']
})
export class MobilePaymentComponent implements OnInit {

  output;
  model;

  constructor(private cartService: CartService) {
    this.model = new MobilePayment('mobile', null, null, this.cartService.cartTotal);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.output = new Payment(JSON.stringify(this.cartService.products), JSON.stringify(this.model));
    this.cartService.flushCart();
    console.log(this.output);
  }

}
