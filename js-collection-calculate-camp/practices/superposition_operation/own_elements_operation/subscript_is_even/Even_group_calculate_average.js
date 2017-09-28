'use strict';
//首先选出所有第偶数个元素，然后选出其中的偶数，按几位数分组，并计算每组的平均数
//当不含有偶数时 返回零

var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];

var calculate_average = function(collection){
  let sum = 0,count =0, avg;
  for(let i=0;i<collection.length;i++){
      sum += collection[i];
      count++;
  }
  avg = sum/count;

  return avg;
};

var even_group_calculate_average = function(collection){
    let even = [];
    let result =[];
    let group ={};

  //选出所有第偶数个元素 中的偶数
  for(let i=1;i<=collection.length;i++){
    if(i%2===0&&collection[i-1]%2===0){
      even.push(collection[i-1]);
    }
  }
  // console.log(arr);

  //按位数分组
  for(let i of even){
    let len = i.toString().length;
    if(!group[len]){
      group[len] = [];
      group[len].push(i);
    }
    else {
      group[len].push(i);
    }

  }
  // console.log(group);


   for(let j in group){
      result.push(calculate_average(group[j]));
      // console.log(group[j]);
   }

   if(result.length===0){
     result.push(0);
   }

   console.log(result);

   return result;

};

even_group_calculate_average(collection_a);
even_group_calculate_average(collection_b);
even_group_calculate_average(collection_c);
// module.exports = even_group_calculate_average;
