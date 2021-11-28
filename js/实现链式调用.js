/* 实现(5).add(3).minus(2) 使其输出结果为6 */
// 懒人写法
~(function () {
  // 每个方法执行都要返回NUMBER这个类的实例，这样才可以继续调用NUMBER类原型中的方法（链式写法）

  function check(n) {
    return (n = Number(n) && isNaN(n) ? 0 : n);
  }
  function add(n) {
    n = check(n);
    return this + n;
  }
  function minus(n) {
    n = check(n);
    return this - n;
  }
  ["add", "minus"].forEach((item) => {
    Number.prototype[item] = eval(item);
  });
})();
console.log((5).add(3).minus(2));
