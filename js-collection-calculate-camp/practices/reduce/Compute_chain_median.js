'use strict';
//计算给定链表的中位数
var chain = '1->4->6->2->3->10->9->8->11->20->19->30';

//中位数求解：
// 将数组排序
// 取得中位数

//split() 方法使用指定的分隔符字符串将一个String
// 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置
function compute_chain_median(chain) {
   let str = chain.split('->'); //处理链表 先将其转换为字符串数组
   // console.log(str);
  str.sort((a,b)=>a-b);
  // console.log(str); //字符串数组
  let low = Math.floor((str.length-1)/2);
  let high = Math.ceil((str.length-1)/2);
  let median = (parseInt(str[low])+parseInt(str[high]))/2;
  return median;
}

console.log(compute_chain_median(chain));
// module.exports = compute_chain_median;
