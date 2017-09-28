'use strict';
//找出给定集合元素的第一个偶数
var collection = [1,11,27,20,4,9,15];

//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
function find_first_even(collection) {
  //1.
/*  let arr =[];
  collection.forEach(item =>{if(item%2==0){arr.push(item)}})

  return arr[0];*/
 //2.
  let first_index = collection.findIndex(t=>t%2==0);
  return collection[first_index];
}

console.log(find_first_even(collection));
// module.exports = find_first_even;

