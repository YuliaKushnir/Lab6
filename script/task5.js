const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function getFruitsArray(fruitsArray) {
    return fruitsArray.map(fruit => `${fruit.name}: ${fruit.price}`);
}
const fruitArray = getFruitsArray(fruits);
console.log(fruitArray);
document.getElementsByClassName('task5_1')[0].innerHTML = fruitArray.join(', ');;

function getDiscountedFruitsArray(fruitArray) {
    return fruitArray.map(fruit => ({
        name: fruit.name,
        price: fruit.price * 0.8 
    }));
}
const discountedFruitArray = getDiscountedFruitsArray(fruits);
console.log(discountedFruitArray);
document.getElementsByClassName('task5_2')[0].innerHTML = discountedFruitArray.map(fruit => `${fruit.name}: ${fruit.price}`).join(', ');

function assignId(fruitArray) {
    let index = 0;
    return fruitArray.map((fruit, index) => ({
        id: index + 1, 
        name: fruit.name,
        price: fruit.price
    }));
}

const fruitsWithId = assignId(fruits);
console.log(fruitsWithId);
document.getElementsByClassName('task5_3')[0].innerHTML = fruitsWithId.map(fruit => `Id: ${fruit.id}, ${fruit.name}, ${fruit.price}`).join('. ');