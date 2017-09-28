'use strict';
//找出某元素在给定集合中的最后一个下标
var collection = [1,11,27,20,4,9,15,4,1,11];
var element = 4;

//lastIndexOf() 方法返回指定元素
// （也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1
function calculate_elements_sum(collection, element) {
  return collection.lastIndexOf(element);
}

console.log(calculate_elements_sum(collection,element));
// module.exports = calculate_elements_sum;
