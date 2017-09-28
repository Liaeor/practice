'use strict';
//将集合A中得元素映射成集合B中的元素
var collection_a = [1, 2, 3, 4, 5];
// var collection_b = [2, 4, 6, 8, 10];
function map_to_even(collection){
  return collection.map(item =>2*item);
}

console.log(map_to_even(collection_a));
// module.exports = map_to_even;
