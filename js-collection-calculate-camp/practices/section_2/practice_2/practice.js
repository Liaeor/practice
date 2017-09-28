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
  "d-5"
];

function count_same_elements(collection) {
   let arr = [],result = [];

   for(let i of collection){
     if(i.indexOf('-')===-1){
        if(!arr[i]){
          arr[i] = {};
          arr[i].key = i;
          arr[i].count = 1;
        }
        else {
          arr[i].count ++;
        }
     }
     else {
       let item = i.split('-'),
         pro = item[0],
         ct = parseInt(item[1]);
        if(!arr[pro]){
          arr[pro] ={};
          arr[pro].key = pro;
          arr[pro].count = ct;
        }
        else {
          arr[pro].count +=ct;
        }
     }
   }

   for(let j in arr){
     result.push(arr[j]);
   }

   return result;
}

console.log(count_same_elements(collection));
// module.exports = count_same_elements;
