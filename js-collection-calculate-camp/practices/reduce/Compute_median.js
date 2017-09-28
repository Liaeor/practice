'use strict';
//计算给定奇数个数字的集合的中位数
var collection_a = [1, 1, 1, 2, 3];
var collection_b = [1, 1, 2, 3];
var collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];

//取得中值的步骤是：
// 将数组排序
// 取得中位数
function compute_median(collection) {
  collection.sort((a,b)=>a-b);
  let low = Math.floor((collection.length-1)/2);
  let high = Math.ceil((collection.length-1)/2);
  if(low==high){
    let median = (collection[low]+collection[high])/2;
    return median
  }
  else {
    return '数组个数为偶数！';
  }
}

console.log(compute_median(collection_a));
console.log(compute_median(collection_b));
console.log(compute_median(collection_c));

/*let values = [56,2, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
console.log(values);*/
// module.exports = compute_median;


