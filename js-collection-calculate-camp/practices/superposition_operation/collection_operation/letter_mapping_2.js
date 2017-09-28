'use strict';
//数组的平均数（如果是小数上取整）映射为字母
var collection = [1,2,3,4,5,6,7,8,9,10];

function average_to_letter(collection) {
   var sum = collection.reduce((pre,cur)=>pre+cur);
   var avg = sum/collection.length;

   return String.fromCharCode(96+Math.ceil(avg));
}

console.log(average_to_letter(collection));
// module.exports = average_to_letter;

