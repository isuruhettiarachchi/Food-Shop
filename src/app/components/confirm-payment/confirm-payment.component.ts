import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../../shared/payment.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})
export class ConfirmPaymentComponent implements OnInit {
  @Input() payment;

  model;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.model = new Payment(JSON.stringify(this.cartService.products), this.payment);
  }

  submitToBackend() {
    console.log(this.model);
  }
  // TODO: get confirmation and send the model to backend

}
