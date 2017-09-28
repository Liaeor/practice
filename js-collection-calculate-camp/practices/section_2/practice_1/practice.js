//把A集合中相同的元素统计出数量
var collection = [
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

function count_same_elements(collection) {
   let arr = [],result = [];

   for(let i of collection){
     if(!arr[i]){
       arr[i] = {};
       arr[i].key = i;
       arr[i].count = 1;
     }
     else {
       arr[i].count ++;
     }
   }

   for(let j in arr){
     result.push(arr[j]);
   }

   return result;
}

console.log(count_same_elements(collection));
// module.exports = count_same_elements;
