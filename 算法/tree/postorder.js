const bt = require("./bt");

// 后序遍历
const postorder = (root) => {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};
postorder(bt);

// 后序遍历非递归
const postorderNotFor = (root) => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  while (stack.length > 0) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();

    console.log(`n.val`, n.val);
  }
};
postorderNotFor(bt);
