const express = require("express");

const admin = express.Router();

// 实现登录功能
admin.get("/login", (req, res) => {
  res.render("admin/login");
});
module.exports = admin;
