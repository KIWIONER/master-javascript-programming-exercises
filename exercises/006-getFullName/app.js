function getFullName(firstName, lastName) {
  // your code here
  return firstName + ' ' + lastName;
}

const firstNames = ['Ana', 'Luis', 'Carla', 'Mateo', 'Sofia'];
const lastNames = ['Garcia', 'Lopez', 'Martinez', 'Diaz', 'Perez'];

for (let i = 0; i < 5; i++) {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  console.log(getFullName(randomFirstName, randomLastName));
}
