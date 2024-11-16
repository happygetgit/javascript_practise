class Password {
  constructor() {
    console.log("Welcome to the password generator");
  }

  passwordGenerator(len) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special_chars = "!@#$%^&*";
    const all_chars = upperCase + lowerCase + numbers + special_chars;
    let password = "";
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * all_chars.length);
      password += all_chars[randomIndex];
    }
    console.log(password);
    return password;
  }

  generaPassword(len) {
    if (len < 3) {
      console.log("Your password should be atleast 3 characters long...");
    } else {
      this.passwordGenerator(len);
    }
  }
}
let password_length = 12;
let p = new Password();
p.generaPassword(password_length);
