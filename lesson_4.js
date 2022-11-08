console.log('Course--Javascript Classes, Lesson 4');

console.log('Inheritance & Extends');

// Parent and Child Class

class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

class Programmer extends Person{
    constructor(_name,_age,_language,_yearsOfExperience){
        super(_name,_age);
        this.yearsOfExperience = _yearsOfExperience; 
        this.language = _language;
    }

    code(){
        console.log(`${this.name} is coding in ${this.language} since last ${this.yearsOfExperience} years`);
    }
}

function develpSoftware(programmers){
    for(let programmer of programmers){
        programmer.code();
    }
}

let programmers = [
    new Programmer('Sayyad',40,'.Net',10),
    new Programmer('Imran',32,'Java',5),
    new Programmer('Anwar Moazam',38,'Java Script',3)
]

let person1 = new Person('Anwar Moazam',38);
console.log(person1);

develpSoftware(programmers)