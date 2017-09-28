//选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,
// 把他们的count-1，输出减过之后的新A集合

var collection_a = [
  {key: "a", count: 2},
  {key: "e", count: 2},
  {key: "h", count: 2},
  {key: "t", count: 2},
  {key: "f", count: 2},
  {key: "c", count: 2},
  {key: "g", count: 2},
  {key: "b", count: 2},
  {key: "d", count: 2}
];

var object_b = {value: ["a", "d", "e", "f"]};

function create_updated_collection(collection_a, object_b) {
  for(let i of collection_a){
    for (let j of object_b.value){
      if(i.key==j){
        i.count --;
      }
    }
  }

  return collection_a;
}
console.log(create_updated_collection(collection_a,object_b));

// module.exports = create_updated_collection;
