var db = connect("school");
var start = Date.now();
for (let i = 0; i < 1000; i++) {
  db.student.insert({ name: `zxk${i}`, age: i });
}
print("cost" + (Date.now() - start) + "s");
