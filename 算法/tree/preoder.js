const bt = require("./bt");

// 先序遍历,递归处理
const preorder = (root) => {
  if (!root) return;
  console.log(`root.val`, root.val);
  preorder(root.left);
  preorder(root.right);
};
preorder(bt);

// 先序遍历,非递归处理
const preorderNotFor = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};
preorderNotFor(bt);
