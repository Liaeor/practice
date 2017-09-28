//选出A集合中与B集合中子数组的元素相同的元素
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = [["a", "d", "e", "f"]];

function collect_same_elements(collection_a, collection_b) {
   //降维
   function reduceCollection(collection) {
     return Array.prototype.concat.apply([],collection);
   }
   let collection_c =reduceCollection(collection_b);
   // console.log(collection_c);
   //求交集
   return collection_a.filter(item => collection_c.includes(item));
}

console.log(collect_same_elements(collection_a,collection_b));
// module.exports = collect_same_elements;
