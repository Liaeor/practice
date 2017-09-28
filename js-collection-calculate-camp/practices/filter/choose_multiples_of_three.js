'use strict';

//从collection中选出3的倍数
var collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];
function choose_multiples_of_three(collection) {
  return collection.filter( item => item%3===0);
}

console.log(choose_multiples_of_three(collection));
module.exports = choose_multiples_of_three;
