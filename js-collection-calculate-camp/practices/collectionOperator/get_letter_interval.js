'use strict';

//根据给出的两个数字得到 （对应自增、自减的） 字母区间

//需要记住的 几个 字符 对应的 ASCII 码  A-65 a-97
//fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
//charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
//str.toUpperCase() 字符串小写转大写
//str.toLowerCase() 字符串大写转小写

function get_letter_interval(number_a, number_b) {
  var arr =[];

  if(number_a<=number_b){
    for(var i=number_a;i<=number_b;i++){
      arr.push(String.fromCharCode(96+i));
    }
  }
  else{
    for(var i=number_a;i>=number_b;i--){
      arr.push(String.fromCharCode(96+i));
    }
  }
  return arr;
}


var result1 = get_letter_interval(1,5);
var result2 = get_letter_interval(5,1);
var result3 = get_letter_interval(5,5);

console.log(result1);
console.log(result2);
console.log(result3);


/*module.exports = get_letter_interval;*/
/*
String.fromCharCode((65+i)*/
