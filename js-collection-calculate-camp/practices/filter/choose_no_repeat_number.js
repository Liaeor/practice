'use strict';
//从collection中选出不重复的数字（去掉重复元素）
var collection = [1, 1, 1, 2, 2, 3, 4];
function choose_no_repeat_number(collection) {
  //1.for
/*   var arr =[];
   for(let i=0;i<collection.length;i++){
     for(let j=i+1;j<collection.length;j++){
        if(collection[i]===collection[j]){
                j=++i;
        }
     }
     arr.push(collection[i]);
   }
   return arr;*/

  //2.includes()
/*  var  arr = [];
  for(let i=0;i<collection.length;i++){
    if(!arr.includes(collection[i])){
      arr.push(collection[i]);
    }
  }
  return arr;*/

 //3.indexOf()

  return collection.filter(
    (item,index) => collection.indexOf(item)===index
  )
//or  类似于 includes()的操作


//4.Set()
/*
  var set = new Set(collection);
  return Array.from(set);
*/

}


console.log(choose_no_repeat_number(collection));
/*
module.exports = choose_no_repeat_number;
*/
