function getSmallestElementAtProperty(obj, key) {
    // retorna el elemento más pequeño del array ubicado en dicha key.
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return Math.min(...obj[key]);
    }
    return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
