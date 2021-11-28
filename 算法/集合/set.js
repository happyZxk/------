let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

console.log(`mySet`, mySet);

const has = mySet.has(o);
mySet.delete(5);

for (const item of mySet.values()) {
  console.log("item", item);
}
for (const item of mySet.keys()) {
  console.log("item", item);
}
for (const [key, val] of mySet.entries()) {
  console.log("item", key, val);
}

const arr3 = Array.from(mySet);
const arr4 = [...mySet];
console.log(`arr3`, arr3);
console.log(`arr4`, arr4);
const mySet2 = new Set([1, 2, 3, 4]);
// 求交集
const intersection = new Set(
  [...mySet].filter((m) => {
    return mySet2.has(n);
  })
);
// 求差集
const diff = new Set(
  [...mySet].filter((m) => {
    return !mySet2.has(n);
  })
);
