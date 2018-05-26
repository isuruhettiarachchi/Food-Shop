import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShowcaseComponent } from './components/showcase/showcase.component';
import { CartComponent } from './components/cart/cart.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MobilePaymentComponent } from './components/mobile-payment/mobile-payment.component';
import { CardPaymentComponent } from './components/card-payment/card-payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShowcaseComponent },
  { path: 'cart-view', component: CartViewComponent,
    children: [
      { path: '', redirectTo: 'cart', pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
      { path: 'cardpayment', component: CardPaymentComponent },
      { path: 'mobilepayment', component: MobilePaymentComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
