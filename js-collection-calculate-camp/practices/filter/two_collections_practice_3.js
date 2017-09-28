'use strict';

//选出A集合中可以被B集合中整除的数
var collection_a = [4,7,9,25,16,15,21,64,32,35,49];
var collection_b = [2,3,5];
//[4,9,25,16,15,21,64,32,35]
function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(function (item) {
          /*console.log('ssss'+item);*/
       //planA:

/*       return collection_b.some(function (n) {
           if(item % n ===0){  // 此处要作为判断条件  不能作为结果直接返回
             return true;
           }
       })*/
      //planB:

          for(let i=0;i<collection_b.length;i++){
          if(item % collection_b[i] ===0){
               return true;
          }
        }



  }
  )

}

console.log(choose_divisible_integer(collection_a,collection_b));
/*module.exports = choose_divisible_integer;*/

/*for(let i=0;i<collection_b.length;i++){

}*/
