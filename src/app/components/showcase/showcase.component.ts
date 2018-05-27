import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  // @Input() products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
  }

}
