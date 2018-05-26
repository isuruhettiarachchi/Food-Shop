import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.product);
    console.log(this.cartService.products);
  }

}
