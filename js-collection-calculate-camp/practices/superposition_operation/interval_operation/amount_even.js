'use strict';
//1-10的偶数算总数
var collection = [1,2,3,4,5,6,7,8,9,10];
function amount_even(collection) {
   let sum = 0;
   for(let i of collection){
     if(i%2===0){
       sum += i;
     }
   }

   return sum;
}

console.log(amount_even(collection));
// module.exports = amount_even;
