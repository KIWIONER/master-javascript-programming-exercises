function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + ' ' + obj.lastName;
  return obj;
}
//addFullNameProperty({ firstName: 'John', lastName: 'Smith' });
console.log(addFullNameProperty({ firstName: 'John', lastName: 'Smith' }));

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' +obj.lastName;
  return obj 
}
console.log(addFullNameProperty({ firstName: 'Maria', lastName: 'Antonieta' }));