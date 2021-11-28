const arr = [1, 2, 1, 2];

const arr1 = [...new Set(arr)];
console.log(`arr1`, arr1);

const set = new Set(arr);
console.log(`set`, set);
const has = set.has(1);
console.log(has);

// 求交集

const set2 = new Set([2, 3]);

const set3 = new Set([...set].filter((item) => set2.has(item)));
