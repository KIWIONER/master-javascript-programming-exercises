// Write your function here
function areValidCredentials(name, password) {
    //retorna true si el nombre tiene más de 3 caracteres
    //La contraseña debe tener por lo menos 8 caracteres 
    //de lo contrario debe retornar false
    return (name.length > 3 && password.length >= 8);
}

console.log(areValidCredentials('Ritu', 'mylongpassword')); // --> true
