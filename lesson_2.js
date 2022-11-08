console.log('Course--Javascript Classes, Lesson 2');

console.log('Getter and Setter');

class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
        this.numOfRequestForArea = 0;
    }

    get area(){
        this.numOfRequestForArea++;
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let mySquare1 = new Square(5);
let mySquare2 = new Square(4);

console.log(mySquare1)
console.log(mySquare2)
console.log(mySquare1.area);

mySquare2.area = 25;

console.log(mySquare1.width);
console.log(mySquare1.height);
console.log(mySquare1.numOfRequestForArea)
console.log(mySquare2.numOfRequestForArea)
