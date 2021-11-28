function _new() {
  var Func = [].shift.call(arguments);
  var obj = Object.create(Func.prototype);
  var result = Func.apply(obj, arguments);
  return typeof result === "object" && result != null ? result : obj;
}
window._new = _new;
function Person(name) {
  this.name = name;
}
_new(Person, "zxk");
