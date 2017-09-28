//选出A集合中跟B对象中value属性中的元素相同的元素
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var object_b = {value: ["a", "d", "e", "f"]};

function collect_same_elements(collection_a, object_b) {

   let collection_c = [];
   for(let i of object_b.value){
     collection_c.push(i);
   }
   console.log(collection_c);

   return collection_a.filter(item =>collection_c.includes(item));
}

console.log(collect_same_elements(collection_a,object_b));
// module.exports = collect_same_elements;
