'use strict';
//验证下标为偶数的 元素中是否含有某个元素
var collection_a = [1, 2, 3, 4, 5, 6];

var is_exist_element = function(collection,element){
   let arr =[]

  for(let i=0;i<collection.length;i++){
    if(i%2===0){
       arr.push(collection[i]);
    }
  }
  // console.log(arr);

  if(arr.includes(element)){
    return true;
  }
  else {
    return false;
  }

};
console.log(is_exist_element(collection_a,3));
console.log(is_exist_element(collection_a,4));
// module.exports = is_exist_element;
