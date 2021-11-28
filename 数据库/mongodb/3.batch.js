var db = connect("school");
var start = Date.now();
var stus = [];
for (let i = 0; i < 1000; i++) {
  stus.push({ name: `zxk${i}`, age: i });
}
db.student.insert(stus);
print("cost" + (Date.now() - start) + "s");
