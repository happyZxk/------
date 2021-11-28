// 单例模式
let namespace = function () {
  //创建一些方法(必报中的私有方法)
  let fn = function () {
    //...
  };
  return {
    name: "xxx",
    fn,
  };
};
namespace.name;
namespace.fn();
