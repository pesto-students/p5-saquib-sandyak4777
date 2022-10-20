var person = function () {};

person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

class Teacher extends person {
  constructor(name, age) {
    super(name, age);
  }
  teach(value) {
    console.log(`${this.name} is now teaching ${value}`);
  }
}

const him = new Teacher();
him.initialize("Adam", 45);
console.log(him);
him.teach("inheritance");
