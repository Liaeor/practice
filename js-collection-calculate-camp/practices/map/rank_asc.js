'use strict';
// 从大到小排序
var collection_a = [3, 2, 4, 5, 6];
var rank_asc = function(collection){
  //1.
/*
  function compare(a,b) {
    if(a>b){
      return -1;
    }
    else if(a<b){
      return 1;
    }
    else {
      return 0;
    }
  }
  collection.sort(compare);*/
  //2.简单写法
  collection.sort((a,b)=>b-a);
  return collection;
};

console.log(rank_asc(collection_a));
// module.exports = rank_asc;
