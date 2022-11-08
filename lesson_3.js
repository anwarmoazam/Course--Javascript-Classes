console.log('Course--Javascript Classes, Lesson 3');

console.log('Static Methods');

class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static isEqualsSquare(square1,square2){
        return square1.width * square1.height === square2.width * square2.height;
    }

    static isValidDiamensions(width,height){
        return width === height;
    }
}

let mySquare1 = new Square(5);
let mySquare2 = new Square(4);
let mySquare3 = new Square(4);


console.log(mySquare1)
console.log(mySquare2)

console.log(Square.isEqualsSquare(mySquare1,mySquare2));
console.log(Square.isEqualsSquare(mySquare2,mySquare3));

console.log(Square.isValidDiamensions(6,6));
console.log(Square.isValidDiamensions(7,6));