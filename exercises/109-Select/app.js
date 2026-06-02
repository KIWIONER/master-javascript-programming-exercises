// retorna un nuevo objeto cuyas keys deben estar presentes en el array y el objeto dado.
function select (arr,obj){
    let newObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
//  ¿Tú tienes guardada una propiedad que se llame exactamente igual a este string?
            newObj[arr[i]] = obj[arr[i]];
        }
    }
    return newObj;
}

let obj = {
  name: 'Zaphod',
  age: 273,
  role: 'President of the Galaxy'
};
let output = select(['name', 'age', 'role', '7'], obj);
console.log(output); // --> { name: 'Zaphod', age: 273, role: 'President of the Galaxy' }