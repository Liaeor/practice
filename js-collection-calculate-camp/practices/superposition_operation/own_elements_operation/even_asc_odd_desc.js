'use strict';
//偶数奇数分两头，偶数部分从小到大，奇数部分从大到小
var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
// var collection_b = [2, 4, 12, 32, 46, 54, 68, 67, 53, 45, 11];

var even_asc_odd_desc = function(collection){
   let even = [] ,odd = []

   for(let i of collection_a){
     if(i%2==0){
       even.push(i);
     }
     else {
       odd.push(i);
     }
   }

   even.sort((a,b)=>a-b);
   odd.sort((a,b) =>b-a);

   return even.concat(odd);
};
console.log(even_asc_odd_desc(collection_a));
// module.exports = even_asc_odd_desc;
