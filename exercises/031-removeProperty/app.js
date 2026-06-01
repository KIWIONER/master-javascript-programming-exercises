function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}
console.log(removeProperty({ name: 'Sam', age: 20 },'name')); // { age: 20 }
console.log(removeProperty({ animal: 'lagartija', altura: `145cm` },'animal')); 
