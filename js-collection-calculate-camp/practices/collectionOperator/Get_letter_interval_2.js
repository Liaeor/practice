'use strict';

//根据给出的两个数字得到 （对应自增、自减的） 字母区间
var collection_a = ['t', 'u', 'v', 'w', 'x',
  'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
  'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
  'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
  'az', 'ba'
];
var collection_b = ['ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at',
  'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai',
  'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x',
  'w', 'v', 'u', 't'
];

function get_letter_interval_2(number_a, number_b) {
  var arr =[];

  if(number_a<=number_b){
    for(var i=number_a;i<=number_b;i++){
      if(i<=26){
      arr.push(String.fromCharCode(96+i));
      }
      else{
        if(i%26==0){
          arr.push((String.fromCharCode(96+(i/26)-1)+String.fromCharCode(96+26)))
        }
        else{
          arr.push((String.fromCharCode(96+(i/26))+String.fromCharCode(96+(i%26))))
        }
      }
      //String.fromCharCode(num1, ..., numN) 可接受指定的 Unicode 值(数字)，然后返回字符串
      //str.charCodeAt(index) 返回 给定索引处字符的 UTF-16 代码单元值的数字；如果索引超出范围，
      // 则返回 NaN
      //str.toUpperCase() 字符串小写转大写
      //str.toLowerCase() 字符串大写转小写
    }
  }
  else{
    for(var i=number_a;i>=number_b;i--){
      if(i>26){
        if(i%26==0){
          arr.push((String.fromCharCode(96+(i/26)-1)+String.fromCharCode(96+26)))
        }
        else{
          arr.push((String.fromCharCode(96+(i/26))+String.fromCharCode(96+(i%26))))
        }
      }
      else{
        arr.push(String.fromCharCode(96+i));
      }
    }
  }
  return arr;
}

var result1 = get_letter_interval_2(20,53);
var result2 = get_letter_interval_2(53,20);
var result3 = get_letter_interval_2(28,28);

console.log(result1);
console.log(result2);
console.log(result3);

/*module.exports = get_letter_interval_2;*/

/*console.log(String.fromCharCode(65).toLowerCase());*/

/*function get_letter_interval() {
  let arr = [];
  let a_z = '';
  for(let i = 97;i<123;i++){
    a_z += String.fromCharCode(i)+",";

  }
  arr.push(a_z);
  console.log(arr);
  return arr;
}

get_letter_interval();*/
