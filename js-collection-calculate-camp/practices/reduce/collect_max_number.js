'use strict';
//选出给定数字集合元素的最大值
var collection = [1, 2, 3, 4, 5];
function collect_max_number(collection) {
  //1.普通遍历
  /*  let max=collection[0];
    for(let i=0;i<collection.length;i++){
      if(collection[i]>max){
        max =collection[i];
      }
    }

    return max;
  }*/
  //2.reduce() 方法  对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值
  // pre 初始值（或者上一次回调函数的返回值）
  // cur 当前函数处理的值
  // index 当前值的索引
  // array 调用reduce的数组
  return collection.reduce(function (pre, cur, index, array) {
    if (cur > pre) {
      return cur;
    } else {
      return pre;
    }
  })
}

console.log(collect_max_number(collection));
// module.exports = collect_max_number;
