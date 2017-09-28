'use strict';
//1-10的奇数算平均数
var collection = [1,2,3,4,5,6,7,8,9,10];
function average_uneven(collection) {
  var count = 0,sum=0;
  for(let i of collection){
    if(i%2!==0){
      sum += i;
      count ++;
    }
  }

  return sum/count;

}

console.log(average_uneven(collection));

// module.exports = average_uneven;
