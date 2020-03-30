import {Mobile} from './Mobile';

export default class BasicPhone extends Mobile {
    mobileType: string;

    constructor(mobileId: number, mobileName: string, mobileCost: number) {
        super(mobileId, mobileName, mobileCost);
        this.mobileType = 'BasicPhone';
    }

    displayDetails() {
        console.log(this.mobileId + ',' + this.mobileName + ',' + this.mobileCost + ',' + this.mobileType);
    }
}
