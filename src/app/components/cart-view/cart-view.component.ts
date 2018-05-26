import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
