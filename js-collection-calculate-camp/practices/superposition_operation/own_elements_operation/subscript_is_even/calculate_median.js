'use strict';
//计算所有第偶数个元素的中位数
var collection_a = [1, 2, 3, 4, 5, 6];
var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var calculate_median = function(collection){
  let arr = [], median;
  for(let i=1;i<=collection.length;i++){
    if(i%2===0){
      arr.push(collection[i-1])
    }
  }

  arr.sort((a,b)=>a-b);
  // console.log(arr);
  var low = Math.floor((arr.length-1)/2);
  var high = Math.ceil((arr.length-1)/2)
  median =(arr[low] + arr[high])/2

  return  median;

};

console.log(calculate_median(collection_a));
console.log(calculate_median(collection_b));
// module.exports = calculate_median;


