'use strict';

//选出给定区间中所有的偶数
var collection_a = [1, 2, 3, 4, 5];

function collect_all_even(collection) {

var arr = new Array();

collection_a.forEach(function (t) {
  if(t%2==0){
    arr.push(t);
  }
})
   return arr;
}

var result = collect_all_even(collection_a);
console.log(result);
/*module.exports = collect_all_even;*/
