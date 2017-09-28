'use strict';

//从collection中选出偶数
var collection = [0, 1, 2, 3, 4, 6];
function choose_even(collection) {

  return collection.filter(/*function (item) {
    */
    item => item%2===0
    /*return item%2===0;
    * }*/
  )

}
let result = choose_even(collection);
console.log(result);

/*module.exports = choose_even;*/
