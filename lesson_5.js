console.log('Course--Javascript Classes, Lesson 5');

console.log('Polymorphism');

class Animal{
    constructor(_name){
        this.name = _name;
    }

    makeSound(){
        console.log(`Generic Animal Sound!`);
    }
}

class Dog extends Animal{
    constructor(_name){
        super(_name);
    }

    makeSound(){
        super.makeSound();
        console.log(`I am ${this.name} and my sound is Woof! Woof!`);
    }
}

let animal1 = new Animal('Dogs');
console.log(animal1);

animal1.makeSound();
let dog = new Dog('Tommy');
dog.makeSound();