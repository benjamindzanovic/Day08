function randomInteger (minNumber, maxNumber){

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomInteger(10, 50);
console.log(randomInteger(10, 50));
module.exports = randomInteger;