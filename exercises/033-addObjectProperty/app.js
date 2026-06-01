function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  const newObj = obj1;
  newObj[key] = obj2
return newObj;
}
console.log(addObjectProperty({}, 'myKey', { name: 'Timmy' })); // { myKey: { name: 'Timmy' } }