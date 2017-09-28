'use strict';
//找出给定集合元素的最后一个偶数
var collection = [1,11,27,20,4,9,15];

//
function find_last_even(collection) {
  //1.
/*  let arr =[];
  collection.forEach(item =>{if(item%2==0){arr.push(item)}})

  return arr[arr.length-1];*/
  //2.
   let arr = collection.reverse(); //数组顺序倒置
   let index = arr.findIndex(t=>t%2==0);
   return arr[index];
}

console.log(find_last_even(collection));

// module.exports = find_last_even;
