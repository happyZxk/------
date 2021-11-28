let command = {
  //   要操作的集合
  findAndModify: "student",
  //    查询条件,指定操作集合的范围
  query: {
    _id: 1,
  },
  //   指定如何更新,就是把年龄加100岁
  update: { $set: { age: 100 } },
  //   指定返回的字段,true要返回,false不返回，默认为true
  fields: { age: true, _id: false },
  //  是否排序 表示按age字段正序排列
  sort: { age: true },
  //    new: true 返回更新后的文档
  new: true,
};
var db = connect("school");
var result = db.runCommand(command);
printjson(result);
