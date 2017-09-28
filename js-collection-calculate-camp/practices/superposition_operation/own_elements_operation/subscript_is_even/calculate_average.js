'use strict';
//计算第偶数个元素的平均数
var collection_a = [1, 2, 3, 4, 5, 6];

var calculate_average = function(collection){
   let sum = 0,count =0, avg;
   for(let i=1;i<=collection.length;i++){
     if(i%2===0){
       sum += collection[i-1];
       count++;
     }
   }
   avg = sum/count;

  return avg;
};

console.log(calculate_average(collection_a));
// module.exports = calculate_average;
