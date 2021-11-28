class Subject {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.state = "很好";
  }
  // 被观察者需要提供一个接受观察者的方法
  attach(observe) {
    this.observers.push(observe); //存放所有的观察者
  }
  setState(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(newState));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(newState) {
    //所有观察者更新状态
    console.log(this.name + newState);
  }
}
let sub = new Subject("小宝贝");
let o1 = new Observer("爸爸");
let o2 = new Observer("妈妈");

sub.attach(o1);
sub.attach(o2);

sub.setState("哈哈哈");

class Event {
  constructor() {
    this.callbacks = {};
  }
  on(key, fn) {
    if (this.callbacks[key]) {
      this.callbacks[key].push(fn);
    } else {
      this.callbacks[key] = [fn];
    }
  }
  emit(key, ...parma) {
    const q = this.callbacks[key];
    if (q) {
      q.forEach((fn) => {
        fn(...parma);
      });
    }
  }
  off(key, fn) {
    const q = this.callbacks[key];
    if (q) {
      this.callbacks[key] = q.filter((item) => item !== fn);
      return true;
    }
    return false;
  }
}

const events = new Event();
const add = (a, b) => {
  console.log(`a+b`, a + b);
};
const jain = (a, b) => {
  console.log(`a-b`, a - b);
};
events.on("add", add);
events.on("add", jain);

events.emit("add", 1, 2);
// events.emit("jain", 1, 2);
events.off("add", jain);
events.emit("add", 1, 2);
// events.off("jain", jain);
// events.emit("add", 1, 2);
// events.emit("jain", 1, 2);
