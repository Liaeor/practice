'use strict';
//从小到大排序
var collection_a = [3, 2, 4, 5, 6];
var rank_desc = function(collection){
/*  function compare(a,b) {
    if(a<b){
      return -1;
    }
    else if(a>b){
      return 1;
    }
    else {
      return 0;
    }
  }
  collection.sort(compare);
  return collection;*/

  return collection.sort((a,b)=>a-b);
};

console.log(rank_desc(collection_a));
// module.exports = rank_desc;
