class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add_complex(num) {
    console.log(num);
    this.real += num.real;
    this.imaginary += num.imaginary;
  }

  get real() {
    return this._real;
  }

  get imaginary() {
    return this._imaginary;
  }

  set real(newReal) {
    this._real = newReal;
  }
  set imaginary(newImaginary) {
    this._imaginary = newImaginary;
  }
}

let a = new Complex(3, 4);
console.log("old numbers are " + a.real + " , " + a.imaginary);
a.real = 10;
a.imaginary = 20;
console.log("new numbers are " + a.real + " , " + a.imaginary);
let b = new Complex(4, 5);
a.add_complex(b);
console.log(b.real, b.imaginary);

// class Human {
//   constructor(name, food) {
//     this.name = name;
//     this.food = food;
//   }

//   walk() {
//     console.log(this.name + " is walking");
//   }
// }

// class lazzyfellow extends Human {
//   walk() {
//     console.log("This lazy fellow is also walking");
//   }
// }

// let a = new Human("shalini", "biryani");
// let b = new lazzyfellow();
// a.walk();
// b.walk();
