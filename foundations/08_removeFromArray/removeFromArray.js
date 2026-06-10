const removeFromArray = function(arr, ...arg) {
 
      return arr.filter(item => !arg.includes(item))
};

let arr = [1,2,5,3,6,8]

console.log(removeFromArray(arr, 2,6));
// Do not edit below this line
module.exports = removeFromArray;
