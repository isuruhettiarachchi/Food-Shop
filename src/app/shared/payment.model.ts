import { Product } from './product.model';

export class Payment {
    constructor(
        public productList,
        public payment
    ) {}
}
