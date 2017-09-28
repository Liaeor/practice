'use strict';
//把二维数组变成一维数组(数组降维)
var collection = [1, [2], [3, 4]];

/*function double_to_one(collection) {
  let arr=[];
  collection.forEach(function (t) {
     console.log(t[0]);
    if(t[0]=== undefined){ //undefined 是一个基本数据类型
       arr.push(t);
    }
    else {
      t.forEach(function (f) {
         arr.push(f);
      })

    }
  })

  return arr;
}

console.log(double_to_one(collection));*/

function reduceDimension(arr) {
  var reduced = [];
  for (var i = 0; i < arr.length; i++) {
      reduced =reduced.concat(arr[i]);
  }
  return reduced;
}
console.log(reduceDimension(collection));
// reduceDimension(collection);

/*
module.exports = double_to_one;
*/
