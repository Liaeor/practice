'use strict';

//弹出两个集合的bing集

var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
/*var collection_c = [10, 27, 28, 19, 5, 78, 23];*/
//数组去重
function get_intersection(collection_a, collection_b) {
  var arr = [];

  var collection_c = collection_a.concat(collection_b);
  console.log(collection_c);

//1.最容易想到的 for循环遍历
 /*var isRepeat;
  for(var i=0; i<collection_c.length; i++) {
    isRepeat = false;
    for(var j=i+1; j<collection_c.length; j++) {
      if(collection_c[i] === collection_c[j]){
        isRepeat = true;
        break;
      }
    }
    if(!isRepeat){
      arr.push(collection_c[i]);
    }
  }
  return arr;
  */

/*
    var ret = [];
    var len = collection_c.length;
    for(var i=0; i<len; i++){
      for(var j=i+1; j<len; j++){
        if(collection_c[i] === collection_c[j]){
          j = ++i;
        }
      }
      arr.push(arr[i]);
    }
    return arr;
  */

//3.利用对象的 key 不能重复 来去重，由于对象key只能为字符串，因此这种去重方法有许多局限性

 //2.forEach遍历
  // Array.prototype.indexOf() 方法返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回-1

/*  collection_c.forEach(function(item){
    if(arr.indexOf(item) === -1){
      arr.push(item);
    }
  });
   return arr;
  */

// Array.prototype.indexOf()方法
/*
    return collection_c.filter(function(item, index){
      // indexOf返回第一个索引值，
      // 如果当前索引(index)不是匹配到的元素的第一个索引(indexOf(item))，说明是重复值 返回false
      /!*console.log(collection_c.indexOf(item) === index);*!/
      return collection_c. === index;
    });
*/

//4. ES5 引入了Set 数据类型 （集合） ，集合中不允许有重复元素，如果你重复添加同一个元素的话，Set中只会存在一个，包括NaN也是这样
  /*var set = new Set(collection_c);
  return Array.from(set);*/

//5. ES6 引入了includes()方法 ，用于判断数组中是否包含某个元素
// Array.prototype.includes()方法
/*  collection_c.forEach(function (t) {
    if(!arr.includes(t)){
      arr.push(t);
    }
  })

  return arr;
  */

}


var result = get_intersection(collection_a,collection_b);
console.log(result);

/*module.exports = get_union;*/




//错误思想error
/*  function display(elem) {
    for(var i=0;i<indexOf(elem);i++) {

      if (elem !=){

      }
        }
    return
  }*/


/*  for(var i =0;i<collection_.length;i++){
    for()
  }*/
