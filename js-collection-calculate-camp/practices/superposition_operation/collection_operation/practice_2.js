'use strict';
//每一个奇数*3+2
var collection = [1,5,7,12,11,35,54,67,70];

function hybrid_operation_to_uneven(collection) {
   var result = [];

   for(let i of collection){
     if(i%2!==0){
       result.push(i*3+2);
     }
   }

   return result;
}

console.log(hybrid_operation_to_uneven(collection));
// module.exports = hybrid_operation_to_uneven;

