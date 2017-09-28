'use strict';

//根据给出的两个数字 得到一个 （自增、自减）的数字区间
function get_integer_interval(number_a, number_b) {
var arr =[];

if(number_a<=number_b){
  for(var i=number_a;i<=number_b;i++){
    arr.push(i);
  }
}
else{
  for(var i=number_a;i>=number_b;i--){
    arr.push(i);
  }
}
return arr;
}

var result1 = get_integer_interval(1,5);
var result2 = get_integer_interval(5,1);
var result3 = get_integer_interval(5,5);

console.log(result1);
console.log(result2);
console.log(result3);
/*module.exports = get_integer_interval;*/

