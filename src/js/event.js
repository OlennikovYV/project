class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

var dog = new Animal('Max', 'dog');

console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.type); // should == 'dog'
console.log(dog.name); // should == 'Max'

dog.name = 'Lassie';
console.log(dog.name); // 'Lassie'
