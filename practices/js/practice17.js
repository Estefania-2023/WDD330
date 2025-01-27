const array = [1, 2, 3];

const mappedArray = array.map(function(element){
    return element + 1;
});
const reduced = array.reduce(function(firstElement, secondElement){
    return firstElement + secondElement;
});
// reduced is 6

const filteredArray = array.filter(function(element){
    return element !== 1;
});
// filteredArray is [2, 3]
console.log(mappedArray); // [2, 3, 4]
console.log(reduced);
console.log(filteredArray); // [2, 3]