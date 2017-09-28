'use strict';
// 字母表映射2
var collection_a = [1, 13, 27, 30, 25, 27];
// var collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa'];
var number_map_to_word_over_26 = function(collection){
  let label = [];
  let collection_b = [];
  for(let i=0;i<26;i++){
    label.push(String.fromCharCode(97+i));
  }
/*  console.log(label);*/

  collection_a.forEach(function (t) {
    if(t<=26){
      collection_b.push(label[t-1]);
    }
    // console.log(parseInt(t/26));
    else {
      collection_b.push(label[parseInt(t/26)-1]+label[t%26-1]);
    }
  })

  return collection_b;
};

console.log(number_map_to_word_over_26(collection_a));
// module.exports = number_map_to_word_over_26;
