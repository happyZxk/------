const bt = require("./bt");

// 中序遍历
const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};
// inorder(bt);

// 中序遍历非递归实现
const inorderNotFor = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(`n.val`, n.val);
    p = n.right;
  }
};
inorderNotFor(bt);
