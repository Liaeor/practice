'use strict';
//选出给定数字集合元素的最小值
var collection = [1, 8, 9, 21, 5];

function collect_min_number(collection) {
   return collection.reduce(function (pre,cur,index,array){
      return pre>cur?cur:pre;
   })
}
console.log(collect_min_number(collection));

// module.exports = collect_min_number;

