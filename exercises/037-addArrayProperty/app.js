function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  //obj[key] = arr;
   obj[key] = arr;
  return obj;
}
const myObj = {};
addArrayProperty(myObj, 'myKey', [1, 2, 3]),
addArrayProperty(myObj, 'frutas',['mango', 'banana', 'manzana']);
addArrayProperty(myObj, 'edades', [12, 29, 34]);
console.log(myObj); 
