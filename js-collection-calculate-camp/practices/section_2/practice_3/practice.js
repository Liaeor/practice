//把A集合中相同的元素统计出数量
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
  "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c:8",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];

function count_same_elements(collection) {
  let arr =[],result = [];

  for(let item of collection){
    if((item.indexOf('-')===-1)&&(item.indexOf(':')===-1)&&(item.indexOf('[')===-1)){
      if(!arr[item]){
        arr[item] = {};
        arr[item].key = item;
        arr[item].count = 1;
      }
      else {
        arr[item].count++;
      }
    }
    else {
      if(item.indexOf('-')>0){
        let h = item.split('-'),
          item2 = h[0],
          num = parseInt(h[1]);

        if(!arr[item2]){
          arr[item2] ={};
          arr[item2].key = item2;
          arr[item2].count = num;
        }
        else {
          arr[item2].count += num;
        }
      }

      if(item.indexOf(':')>0){
        let h = item.split(':'),
          item2 = h[0],
          num = parseInt(h[1]);

        if(!arr[item2]){
          arr[item2] ={};
          arr[item2].key = item2;
          arr[item2].count = num;
        }
        else {
          arr[item2].count += num;
        }
      }

      if(item.indexOf('[')>0){
        let h = item.split('['),
          item2 = h[0],
          num = parseInt(h[1]);
        /*console.log(num);*/

        if(!arr[item2]){
          arr[item2] ={};
          arr[item2].key = item2;
          arr[item2].count = num;
          /*console.log(arr[item2]);*/
        }
        else {
          arr[item2].count += num;
        }
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
