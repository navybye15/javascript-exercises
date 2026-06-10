const sumAll = function(a,b) {
      if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

    let sum = 0;
    let start = Math.min(a,b);
    let max = Math.max(a,b);


    for (let i = start; i<=max; i++){
        sum = sum + (i);
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
