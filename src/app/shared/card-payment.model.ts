export class CardPayment {

    constructor(
        public method: string = 'card',
        public cardNumber: number,
        public CVC: number,
        public name: string,
        public amount: number
    ) {}

}
