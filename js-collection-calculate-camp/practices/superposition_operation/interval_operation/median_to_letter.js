'use strict';
//(20,53)的中位数(如果是小数上取整)对应的字母
var collection = [20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53];

function median_to_letter(collection) {
   var arr,low,high,median,charset=[];
    arr = collection.sort((a,b)=>a-b);
    low = Math.floor((arr.length-1)/2);
    high = Math.ceil((arr.length-1)/2);
    median = Math.ceil((arr[low]+arr[high])/2);

    console.log(median);

  for(let i=0;i<26;i++){
    charset.push(String.fromCharCode(97+i));
  }
   // console.log(charset);

  if(median<=26){
    return charset[median-1];
  }
  else {
    return charset[parseInt(median/26)-1]+charset[median%26-1];
  }

}
console.log(median_to_letter(collection));
// module.exports = median_to_letter;
