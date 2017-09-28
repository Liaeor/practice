'use strict';
//两大一小排序
var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
//[2, 3, 1, 6, 8, 4, 9, 10]

function sliceArray(array) {
  let result = [];
  for (let x = 0; x < Math.ceil(array.length / 3); x++) {
    let start = x * 3;
    let end = start + 3;
    result.push(array.slice(start, end));
  }
  return result;
} //分割数组

function refreshArray(collection) {
   collection.push(collection[0]);
   collection.shift();

   return collection;
}  //数组重排序

// console.log(refreshArray([1,2,3]));


function rank_by_two_large_one_small(collection){
   let result = [];
   let arr = collection.sort((a,b)=>a-b);
   let group = sliceArray(arr);

   for(let i of group){
     if(i.length===3) {
       refreshArray(i);
     }
     result =result.concat(i);
   }
   return result;
}


console.log(rank_by_two_large_one_small(collection_a));

// module.exports = rank_by_two_large_one_small;
