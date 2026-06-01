function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  return person.age >= 21;
  
}
console.log(isPersonOldEnoughToDrink({ name: "Adrian", age: 22 })); // true
console.log(isPersonOldEnoughToDrink({ name: "Kirsten", age: 19 })); // false
console.log(isPersonOldEnoughToDrink({ name: "Sofia", age: 21 })); // true