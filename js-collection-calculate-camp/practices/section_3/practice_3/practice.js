//统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，
// 然后选出C集合中的元素的key属性跟B对象中value
// 属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合
var collection_a = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
  "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c", "c", "c", "c", "c", "c", "c", "c",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d", "d", "d", "d", "d"
];


var object_b = {value: ["a", "d", "e", "f"]};

function create_updated_collection(collection_a, object_b) {
  let arr = [],result = [];
  //计数
  for(let i of collection_a){
      if(!arr[i]){
        arr[i] = {};
        arr[i].key = i;
        arr[i].count = 1;
      }
      else {
        arr[i].count ++;
      }
  }
  //count 满三减一
  for(let j in arr){
    for(let k of object_b.value){
      if(arr[j].key == k){
        arr[j].count -= Math.floor(arr[j].count/3);
      }
    }
    result.push(arr[j]);
  }

  return  result
}

console.log(create_updated_collection(collection_a,object_b));
module.exports = create_updated_collection;
