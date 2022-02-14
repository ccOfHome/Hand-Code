// 递归法
const inorderTraversal = function(root) {
    let res = []
    helper(root, res)
    return res
}

function helper(node, res) {
    if(!node) return
    // 前序遍历 中左右
    res.push(node.val)
    helper(node.left, res)
    helper(node.right, res)
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
    while(stack.length !== 0) {
        let node = stack.pop()
        res.push(node.val)

        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res
}