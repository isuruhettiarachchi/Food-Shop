import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  deleteProduct(product) {
    console.log(product);
    this.cartService.deleteProductFromCart(product);
  }
}
