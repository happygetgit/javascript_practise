class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  walk() {
    alert("Animal " + this.name + " walking.");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}
j = new Animal("chintu");
j.walk();
// console.log(j.capitalize("chintu"));
