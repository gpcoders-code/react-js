

class GpCoders {

    constructor() {
        this.wheels = 4;
        this.type = 'HatchBack';
    }

    whateverfunction() {
        console.log('hello');
    }
}


class Ford extends GpCoders {
    constructor() {
        super();
    }
}


const car = new GpCoders();
const ford = new Ford();

car.whateverfunction();

console.log(ford.wheels)