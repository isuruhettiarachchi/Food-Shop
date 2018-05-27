import { Component, OnInit } from '@angular/core';
import { MobilePayment } from '../../shared/mobile-payment.model';
import { Payment } from '../../shared/payment.model';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-payment',
  templateUrl: './mobile-payment.component.html',
  styleUrls: ['./mobile-payment.component.css']
})
export class MobilePaymentComponent implements OnInit {

  output;
  model;

  constructor(private cartService: CartService, private apiService: ApiService, private router: Router) {
    this.model = new MobilePayment('mobile', null, null, this.cartService.cartTotal);
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
