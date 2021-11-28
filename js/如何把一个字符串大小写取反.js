// 如何把一个字符串大小写取反 aBc 变成 AbC
let str = "zhangXIAOkang2021撒大声地*100！AAA";
let str1 = str.replace(/[a-zA-Z]/g, function (content) {
  // content 每次匹配到的结果
  //   验证是否为大写字母，转为大写和原来的比较，获取对应的AScll表中找到范围（65-90）
  return content.toUpperCase() === content
    ? content.toLowerCase()
    : content.toUpperCase();
});
console.log(`str`, str);
console.log(`str1`, str1);
