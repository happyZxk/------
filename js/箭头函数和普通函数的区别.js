/* 箭头函数和普通函数的区别？构造函数可以new 生成实例，name
接头函数可以吗？为什么 */
/* 区别，1,箭头函数比普通函数更加简洁
2,箭头函数没有自己的this，它里面的this继承函数所处上下文中的this使用call、apply/bind任何方法不能改变this的指向 */
// 3,箭头函数没有arguments
// 4,箭头函数不能被当做构造函数执行（因为：箭头函数没有prototype，也没有this）

// function Fn() {
//   this.x = 100;
// }
// Fn.prototype.getX = function (params) {};
// let f = new Fn();

// function fn(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// let fn = (x) => (y) => x + y;

// document.body.onclick = () => {
//   // this=>window 不是当前操作的dom了
// };

// 回调函数，把一个函数传给另一个函数A,
// 函数A在执行的时候，可以把传递进来的函数B去执行，执行N次，可传值可改this
//
function each(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    let flag = callBack.call(arr, arr[i], i);
    // 接收回调函数返回的结果
    if (flag === false) {
      break;
    }
  }
}
each([10, 20, 30, 40], function (itme, index) {
  // this 原始操作数组
  if (index > 1) {
    return false;
  }
});

// let fn = (...arg) => {
//   console.log(arg);
//   console.log(arguments);
// };
// fn(10, 20, 30);

// 思考题
// each
// let arr = [10, 20, 30],
//   obj = {};
// arr = arr.each(function (item, index) {
//   // this:obj(each 第二个参数不传，this是window即可)
//   if (isNaN(item)) {
//     return false; //如果返回false，结束当前数组的循环
//   }
//   return item * 10; //返回的结果是啥就把数组中当前项替换成啥
// }, obj);

// 2.replace 重写这个方法,实现和内置一摸一样的效果只需要考虑replace([RGE],[CALLBACK])
// 这种传参格式的处理
let str = "zhufeng2019zhufeng2029";
str = str.replace(/zhufeng/g, function (...arg) {
  console.log(`arg`, arg);
  // arg中存储了每一次大正则匹配的信息和小分组匹配的信息
  return "@"; //返回的是啥把当前正则匹配的内容替换成啥
});
console.log(`str`, str);
