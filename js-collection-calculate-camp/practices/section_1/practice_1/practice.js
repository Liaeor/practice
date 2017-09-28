//选出A集合中与B集合中相同的元素(交集)
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = ["a", "d", "e", "f"];

function collect_same_elements(collection_a, collection_b) {
   return collection_a.filter(item =>collection_b.includes(item))
}

console.log(collect_same_elements(collection_a,collection_b));
// module.exports = collect_same_elements;
