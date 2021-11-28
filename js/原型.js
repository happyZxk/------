function Fn() {
  this.x = 100;
  this.y = 200;
  this.say = function () {
    console.log(this);
  };
}
Fn.prototype.say = function () {
  console.log(this.y);
};

Fn.prototype.eat = function () {
  console.log(this.x + this.y);
};
