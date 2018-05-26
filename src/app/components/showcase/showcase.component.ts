import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  // @Input() products: Product[];
  products: Product[] = [];

  constructor() {
    this.products.push({
      id: 'id',
      name: 'name',
      price: '100.00',
      description: 'some description',
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
    });
  }

  ngOnInit() {
  }

}
