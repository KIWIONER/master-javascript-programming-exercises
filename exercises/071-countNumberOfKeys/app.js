let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // retorna la cantidad de propiedades que el objeto dado tenga.
    return Object.keys(obj).length;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
