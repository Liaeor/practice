'use strict';
//根据给定数字无限分割至等于0
//var result = split_to_zero(0.8, 0.2);-> [0.8, 0.6, 0.4, 0.2, 0];
//根据给定数字无限分割至小于0
//var result = split_to_zero(0.7,0.3);-> [0.7, 0.4, 0.1, -0.2];
function spilt_to_zero(number, interval) {
   let arr = [];
   while (number+interval>0){
     // console.log(number+interval);
     arr.push(parseFloat(number.toFixed(1)));
     number= (number*10-interval*10)/10; //避免浮点数运算 精度丢失
     // console.log(number);
    /* number = parseFloat(number-interval).toFixed(1);*/
   }

   return arr;
}

console.log(spilt_to_zero(0.8,0.2));
console.log(spilt_to_zero(0.7,0.3));
// module.exports = spilt_to_zero;
