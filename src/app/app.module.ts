import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AppRoutingModule } from './/app-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { MobilePaymentComponent } from './components/mobile-payment/mobile-payment.component';
import { CardPaymentComponent } from './components/card-payment/card-payment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';
import { LoginComponent } from './components/login/login.component';
import { Properties } from './shared/properties';

@NgModule({
  declarations: [
    AppComponent,
    ProductThumbnailComponent,
    ShowcaseComponent,
    CartComponent,
    CartViewComponent,
    MobilePaymentComponent,
    CardPaymentComponent,
    PaymentComponent,
    ConfirmPaymentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    Properties
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
