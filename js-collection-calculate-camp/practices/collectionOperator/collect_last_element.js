'use strict';

//弹出集合最后一个元素
var collection = [1, 2, 3, 4, 5];
function collect_last_element(collection) {
  return collection[collection.length-1];
}

var result = collect_last_element(collection)
console.log(result);
/*module.exports = collect_last_element;*/
