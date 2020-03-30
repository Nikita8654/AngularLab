import BasicPhone from './BasicPhone';
import SmartPhone from './SmartPhone';

const sampleData = [
    new BasicPhone(1, 'Nokia 2690', 2500),
    new SmartPhone(2, 'Samsung Galaxy s350', 17000)
];
this.sampleData.forEach((phone) => {
    console.log(phone.displayDetails());
});
