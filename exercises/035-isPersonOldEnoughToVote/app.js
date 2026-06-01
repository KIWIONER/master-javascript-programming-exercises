function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age >= 18;
}
console.log(isPersonOldEnoughToVote({ name: "Adrian", age: 22 })); // true
console.log(isPersonOldEnoughToVote({ name: "Sofia", age: 17 })); // false
console.log(isPersonOldEnoughToVote({ name: "Kirsten", age: 19 })); // true