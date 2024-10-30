class Employee {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} is a parent method`);
  }

  login() {
    console.log("Employee logged in..");
  }
  logout() {
    console.log("Employee logged out..");
  }
  leavesRequest(leaves) {
    console.log(`employee has requested ${leaves} leaves`);
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name);
    console.log(`${this.name} is a programmer`);
  }

  requestCoffee(x) {
    console.log(`employee requested ${x} no of coffees`);
  }

  leavesRequest(leaves) {
    super.leavesRequest(leaves);
    console.log("used the method overriding and printing this method.");
  }
}

let employee = new Programmer("Harry");
employee.login();
employee.leavesRequest(4);
employee.logout();
