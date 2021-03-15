var sum = 0
function addThree(){
var addThree = sum + 3;
return addThree;
}
function addFive(){
    var addFive = sum + 5;
    return addFive;
}
addThree();
addFive();
console.log(addThree());
console.log(addFive());
module.exports = {
    addThree,
    addFive,
};