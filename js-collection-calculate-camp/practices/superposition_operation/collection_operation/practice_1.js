'use strict';
//每一个数*3 +2再算总和
var collection = [1,5,7,11,35,67];

function hybrid_operation(collection) {
   var sum = 0;
   for(let i of collection){
     sum += i*3 + 2;
   }

   return sum;

/*   var sum = collection.reduce((pre,cur)=>pre+cur);
   var result = sum*3 + 2*collection.length;
   return result;*/
}

console.log(hybrid_operation(collection));
// module.exports = hybrid_operation;

