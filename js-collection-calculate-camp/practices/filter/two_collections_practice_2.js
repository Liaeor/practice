'use strict';
//选出A集合中与B集合中的不共有元素
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = ["a", "d", "e", "f"];
function choose_no_common_elements(collection_a, collection_b) {

  return collection_a.filter(/*item => collection_b.indexOf(item)===-1*/
     item => !collection_b.includes(item)
  )
}

console.log(choose_no_common_elements(collection_a,collection_b));
/*module.exports = choose_no_common_elements;*/
