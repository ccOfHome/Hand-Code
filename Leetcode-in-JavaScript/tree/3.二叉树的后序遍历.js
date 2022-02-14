// 递归法
const inorderTraversal = function(root) {
    let res = []
    helper(root, res)
    return res
}

function helper(node, res) {
    if(!node) return
    // 后序遍历 左右中
    helper(node.left, res)
    helper(node.right, res)
    res.push(node.val)
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


// 迭代法
const inorderTraversal_ = function(root) {
    if(!root) return []
    let res = []
    let stack = [root]
    let pre = root
    while(stack.length !== 0) {
        let node = stack[stack.length  -1]
        if(node.left === pre || node.right === pre || (!node.left && !node.right)) {
            res.push(node.val)
            pre = stack.pop()
        } else {
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
        }
    }
    return res
}