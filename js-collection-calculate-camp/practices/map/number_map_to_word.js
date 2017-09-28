'use strict';
// 数字映射为字母
var collection_a = [1, 2, 3, 4, 5];
// var collection_b = ['a', 'b', 'c', 'd', 'e'];
//String.fromCharCode(num1, ..., numN) 可接受指定的 Unicode 值(数字)，然后返回字符串
//str.charCodeAt(index) 返回 给定索引处字符的 UTF-16 代码单元值的数字；
// 如果索引超出范围，则返回 NaN
var number_map_to_word = function(collection){
  return collection.map(item =>String.fromCharCode(96+item));
};
console.log(number_map_to_word(collection_a));
// module.exports = number_map_to_word;
