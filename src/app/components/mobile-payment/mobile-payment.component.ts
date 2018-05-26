import { Component, OnInit } from '@angular/core';
import { MobilePayment } from '../../shared/mobile-payment.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-mobile-payment',
  templateUrl: './mobile-payment.component.html',
  styleUrls: ['./mobile-payment.component.css']
})
export class MobilePaymentComponent implements OnInit {

  output;
  amount;
  model;

  constructor(private cartService: CartService) {
    this.model = new MobilePayment('mobile', null, null, this.cartService.cartTotal);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.output = JSON.stringify(this.model);
    console.log(this.output);
  }

}
