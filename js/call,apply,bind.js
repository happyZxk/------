Function.prototype.myCall = function (context) {
  console.log(`arguments`, arguments);
  var context = context || window;
  context.Fn = this;
  const args = [...arguments].slice(1);
  var result = context.Fn(...args);
  delete context.Fn;
  return result;
};

let obj = { a: 1, b: 2 };
function DD(a, b) {
  console.log(this);
  console.log(this.a + this.b + a + b);
}
DD.myCall(obj, 3, 4);

let arr = [1, 2, 3];
function operation(params) {
  console.log(`params`, params);
}
operation(...arr);
