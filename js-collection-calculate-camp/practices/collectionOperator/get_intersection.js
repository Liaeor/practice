'use strict';

//弹出两个集合的交集
var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
// var collection_c = [5, 28, 19];

/*module.exports = get_intersection;*/
//并集
//1.filter() 和ES6的 includes()方法
/*var pre = collection_b.filter(function (item) {
  return collection_a.indexOf(item) === -1;
  //或return !collection_a.includes(item);
})

var union = collection_a.concat(pre);
console.log(union);*/

//2.ES6 Set()

/*var pre = collection_b.filter(function (item) {

})*/
/*var pre = new Set(collection_a.concat(collection_b);
var union =Array.from(pre);
console.log(union);*/


//交集：
/*var intersection = collection_b.filter(function (item) {
  // return collection_a.indexOf(item) > -1;
  return collection_a.includes(item);
})

console.log(intersection);*/

/*var aset = new Set(collection_a);
var bset = new Set(collection_b);

let intersection = Array.from(new Set(collection_a.filter(v => bset.has(v))))
console.log(intersection);*/

//差集：
/*var pre1 = collection_b.filter(function (item) {
  return collection_a.indexOf(item) === -1;
  //或return !collection_a.includes(item);
})

var pre2 = collection_a.filter(function (item) {
  return collection_b.indexOf(item) === -1;
  //或return !collection_b.includes(item);
})

let difference = pre1.concat(pre2);
console.log(difference);*/


/*
var aset = new Set(collection_a);
var bset = new Set(collection_b);
var pre = new Set(collection_a.concat(collection_b).filter(v => !aset.has(v) || !bset.has(v)))
let difference = Array.from(pre);
console.log(difference);
*/



/*//for循环遍历  不完善
function get_intersection(collection_a, collection_b) {
  var arr = [];

  for(var i =0;i<collection_b.length;i++){
    collection_a.forEach(function (t) {
      if(collection_b[i]==t){
        arr.push(collection_b[i]);
      }
    })
  }

  return arr;
}
var result = get_intersection(collection_a,collection_b);
console.log(result);
*/
