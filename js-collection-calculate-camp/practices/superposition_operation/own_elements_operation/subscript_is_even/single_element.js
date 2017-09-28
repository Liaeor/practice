'use strict';
//第偶数个元素中，选出不重复的元素
var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
var collection_b = [11, 11, 22, 11, 33, 11];

var single_element = function(collection){
  let arr = [];

  for(let i =1;i<=collection.length;i++){
    if(i%2===0){
      arr.push(collection[i-1]);
    }
  }

  // console.log(arr);
  var  repeat = arr.filter((item,index) =>arr.indexOf(item)!==index);

  return arr.filter(item => repeat.indexOf(item)===-1);

};

console.log(single_element(collection_a));
console.log(single_element(collection_b));
// module.exports = single_element;
