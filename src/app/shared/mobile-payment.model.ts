export class MobilePayment {
    constructor(
        public method: string = 'mobile',
        public mobileNumber: number,
        public pin: number,
        public amount: number
    ) {}
}
