class Employee {
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
  requestCoffee(x) {
    console.log(`employee requested ${x} no of coffees`);
  }

  leavesRequest(leaves) {
    super.leavesRequest(leaves);
    console.log("used the method overriding and printing this method.");
  }
}

let employee = new Programmer();
employee.login();
employee.leavesRequest(4);
employee.logout();
