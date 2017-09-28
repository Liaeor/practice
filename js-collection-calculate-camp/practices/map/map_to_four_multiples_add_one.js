'use strict';
//四倍加一
var collection_a = [1, 2, 3, 4, 5];
// var collection_b = [5, 9, 13, 17, 21];
var map_to_four_multiples_add_one = function(collection){
  return collection.map(item =>4*item+1);
};
console.log(map_to_four_multiples_add_one(collection_a));

// module.exports = map_to_four_multiples_add_one;
