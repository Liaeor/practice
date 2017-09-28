'use strict';
//判断两个集合是否相同
var collection_a = [1,11,27,20,4,9,15];
var collection_b = [1,11,27,20,4,9,15];

function compare_collections(collection_a, collection_b) {
return collection_a.toString() == collection_b.toString();
}
console.log(compare_collections(collection_a,collection_b));
// module.exports = compare_collections;


