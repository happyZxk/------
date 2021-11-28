/*call和apply的区别 call和apply哪个性能更好 */
/* 改变this指向，call是一个一个传参，apply是数组传参，bing是预先改变this指向 */
// fn.call(obj, 10, 20, 30);
// fn.apply(obj, [10, 20, 30]);
fn.bind();
//  call的性能比apply好一些，尤其是传递的参数超过3个时,所以后期开发时候可以使用call多一点
let arr = [10, 20, 30],
  obj = {};
function fn(x, y, z) {}

fn.apply(obj, arr);
fn.call(obj, ...arr); //基于es6的展开运算符也可以实现把数组中每一项依次传递给函数
/* console.time() 可以测出一段程序的执行时间 */
/* console.profile() 在火狐浏览器中安装firebue */
