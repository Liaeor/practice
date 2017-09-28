//选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素
var collection_a = [
  {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
];
var object_b = {value: ["a", "d", "e", "f"]};

function collect_same_elements(collection_a, object_b) {
  let collection_c =[], collection_d =[];
  for(let i of object_b.value){
    collection_c.push(i);
  }

  for(let j of collection_a){
    collection_d.push(j.key);
  }

  return collection_d.filter(item =>collection_c.includes(item));

}
console.log(collect_same_elements(collection_a,object_b));

// module.exports = collect_same_elements;
