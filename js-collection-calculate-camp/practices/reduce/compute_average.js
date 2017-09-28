'use strict';
//计算给定数字集合元素的平均值
var collection = [1, 3, 5, 98, 67, 453];

function compute_average(collection) {
  //1.普通遍历
  //2.
  let sum = collection.reduce(function (pre,cur,index,array) {
     return pre+cur;
  })
  let result =  sum/collection.length;

  return result;
}
console.log(compute_average(collection));
// module.exports = compute_average;

