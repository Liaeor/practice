'use strict';
//每一个数与下一个数相加，乘以3,最后一个数不算
var collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
// var collection_b = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];

function one_add_next_multiply_three(collection){
  let arr = [];
  for(let i=0;i<collection_a.length-1;i++){
    arr.push((collection[i]+collection[i+1])*3);
  }
  return arr;
}
console.log(one_add_next_multiply_three(collection_a));
// module.exports = one_add_next_multiply_three;
