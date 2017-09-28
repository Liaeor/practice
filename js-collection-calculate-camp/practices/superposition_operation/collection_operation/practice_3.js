'use strict';
//每一个奇数*3+5再求总和
var collection = [1,5,7,12,11,35,54,67,70];
function hybrid_operation_to_uneven(collection) {
  var sum = 0;

  for(let i of collection){
    if(i%2!==0){
      sum += i*3+5;
    }
  }

  return sum;
}

console.log(hybrid_operation_to_uneven(collection));
// module.exports = hybrid_operation_to_uneven;

