'use strict';
//计算给定集合元素的总和
var collection = [1, 2, 3, 4, 5];

function calculate_elements_sum(collection) {
   return collection.reduce((pre,cur)=>pre+cur);
}

console.log(calculate_elements_sum(collection));

// module.exports = calculate_elements_sum;

