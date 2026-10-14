class Person {
    constructor(name, age, happiness) {
        this.name = name
        this.age = age
        this.happiness = happiness
    }

     info() {
        console.log("Людина: " + this.name + ". Вік: " + this.age);
    }
}

var bill = new Person('Bill', 37, true);
var brian = new Person('Brian', 54, false);

bill.name = 'bill2';
bill.info();
brian.info();

// console.log(bill.name);
// console.log(brian.name);