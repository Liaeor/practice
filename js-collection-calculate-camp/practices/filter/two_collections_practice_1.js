'use strict';
//选出A集合中与B集合中的共有元素  (求交集)
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = ["a", "d", "e", "f"];
function choose_common_elements(collection_a, collection_b) {
 /*  var arr = [];*/
   //1.indexOf() or includes()
    return collection_a.filter(
      item => collection_b.indexOf(item) > -1
      //item => collection_b.includes(item)
    )
  //2.Set()
/*   var aSet = new Set(collection_a);
   var bSet = new Set(collection_b);

   return Array.from(collection_b.filter(item => aSet.has(item)));*/

}

console.log(choose_common_elements(collection_a,collection_b));
/*module.exports = choose_common_elements;*/
