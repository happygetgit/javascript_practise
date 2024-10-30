class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running.");
  }
  shout() {
    console.log(this.name + " is shouting..");
  }
  eatBanana() {
    console.log("banana");
  }
}

class JungleeAnimal extends Animal {
  dangerAnimal() {
    console.log(this.name + " is a dangerous animal..");
  }
}

let animal1 = new Animal("Bruno", "red");
let animal2 = new Animal("chimpu", "orange");
let animal3 = new JungleeAnimal("Tiger", "black");

animal1.run();
animal1.shout();
animal1.eatBanana();
animal2.run();
animal2.shout();
animal2.eatBanana();
animal3.run();
animal3.shout();
animal3.eatBanana();
animal3.dangerAnimal();
