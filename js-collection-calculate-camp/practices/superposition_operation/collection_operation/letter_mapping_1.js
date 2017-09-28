'use strict';
//数组的每个偶数映射为字母
var collection = [1,2,3,4,5,6,7,8,9,10];

function even_to_letter(collection) {
   var arr =[];
   for(let i of collection){
     if(i%2==0){
       arr.push(String.fromCharCode(96+i));
     }
   }

   return arr;
}

console.log(even_to_letter(collection));
// module.exports = even_to_letter;
