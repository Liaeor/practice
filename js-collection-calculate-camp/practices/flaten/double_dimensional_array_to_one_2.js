'use strict';
//把二维数组变成一维数组,消除重复,按照第一次出现的顺序排列最后的输出结果
//[1,2,3,5,4]
var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
function double_to_one(collection) {
  var arr = [],result = [];
  collection.forEach(function (t) {
    if(t[0]===undefined){
      arr.push(t)
    }
    else{
      t.forEach(function (item) {
        arr.push(item);
      })
    }
  })

  result = arr.filter(function (elem,index) {
     return arr.indexOf(elem) === index;
  })
/*  arr.forEach(function (e) {
    if(result.indexOf(e) ===-1){
      result.push(e);
    }
  })*/

  console.log(result);
  return result;
}

double_to_one(collection);
// module.exports = double_to_one;
