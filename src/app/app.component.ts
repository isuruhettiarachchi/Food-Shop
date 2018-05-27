import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {
    this.apiService.getFoodList().then((res) => {
      this.productService.products = res;
    });

    if (this.authService.loggedIn === false) {
      this.router.navigateByUrl('/login');
    }
  }
}
