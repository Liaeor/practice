'use strict';
//从collection中计算出每个数的个数
//形如：{'1':6, '2':3, '3':4, '4':2}
var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
function grouping_count(collection) {
   var result = {};
   var item;
  for(let i=0;i<collection.length;i++){
      item = collection[i];
      /*console.log(item);*/
     if(!result[item]){   //注意 设置对象属性的方式
       result[item] = 1;
     }  //为对象增加一个属性 并赋值 1
     else {
       result[item]++; //属性存在 则数量加1
     }
  }
   return result;
}

console.log(grouping_count(collection));

/*module.exports = grouping_count;*/
