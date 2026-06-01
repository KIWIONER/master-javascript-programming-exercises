function addProperty(obj, key) {
  // your code here
  let newObj = obj;
  newObj[key] = true;
  return newObj;
}
console.log(addProperty({}, 'myKey')); //
console.log(addProperty({}, 'llavero'));
console.log(addProperty({}, '44'));