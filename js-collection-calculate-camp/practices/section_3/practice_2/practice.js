//选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,
// 把他们的count，满3减1，输出减过之后的新A集

var collection_a = [
  {key: "a", count: 3},
  {key: "e", count: 7},
  {key: "h", count: 11},
  {key: "t", count: 20},
  {key: "f", count: 9},
  {key: "c", count: 8},
  {key: "g", count: 7},
  {key: "b", count: 6},
  {key: "d", count: 5}
];

var object_b = {value: ["a", "d", "e", "f"]};

function create_updated_collection(collection_a, object_b) {
   for(let i of collection_a){
     for(let j of object_b.value){
       if(i.key== j){
         i.count = i.count-Math.floor(i.count/3);
       }
     }
   }

   return collection_a;
}

console.log(create_updated_collection(collection_a,object_b));
// module.exports = create_updated_collection;
