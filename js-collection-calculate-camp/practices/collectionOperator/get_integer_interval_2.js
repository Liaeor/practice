'use strict';

//根据给出的两个数字 得到(自增、自减 的)偶数区间
function get_integer_interval_2(number_a, number_b) {
  var arr = [];

  if(number_a<=number_b){
    for(var i=number_a;i<=number_b;i++){
      if(i%2==0){
        arr.push(i)
      }
    }
  }
  else {
    for(var i=number_a;i>number_b;i--){
      if(i%2==0){
        arr.push(i)
      }
    }
  }
  return arr;
}

var result1 = get_integer_interval_2(1,10);
var result2 = get_integer_interval_2(10,1);
var result3 = get_integer_interval_2(10,10);
var result4 = get_integer_interval_2(5,5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
/*module.exports = get_integer_interval_2;*/
