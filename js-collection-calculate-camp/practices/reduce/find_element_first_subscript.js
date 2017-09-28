'use strict';
//找出某元素在给定集合中的第一个下标
var collection = [1,11,27,20,4,9,15,4,1,11];
var ele = 4;

//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
function calculate_elements_sum(collection, element) {
  //1.
  /*return collection.indexOf(element);*/
  //2.
  return collection.findIndex(function (t) {
    return t==element;
  })
}

console.log(calculate_elements_sum(collection,ele));

// module.exports = calculate_elements_sum;

