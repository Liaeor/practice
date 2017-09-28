'use strict';
// 三倍映射
var collection_a = [1, 3, 5, 4, 9];
// var collection_b = [3, 9, 15, 12, 27];
var map_to_three_multiples = function(collections){
  return collections.map(item=>3*item);
};
console.log(map_to_three_multiples(collection_a));
// module.exports = map_to_three_multiples;
