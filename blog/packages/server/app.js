const express = require("express");
const app = express();
const path = require("path");

// 开发静态资源文件
app.use(express.static(path.join(__dirname, "public")));

const home = require("./routes/home");
const admin = require("./routes/admin");
// 告诉express框架模板所在的位置
app.set("views", path.join(__dirname, "views"));
// 告诉express框架模板的默认后缀是什么
app.set("view engine", "art");
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine("art", require("express-art-template"));

// 开放静态资源文件
app.use(express.static(path.join(__dirname, "public")));

// 引入路由模块
app.use("/home", home);
app.use("/admin", admin);
app.listen(80, () => {
  console.log("网站服务器启动成功");
});
