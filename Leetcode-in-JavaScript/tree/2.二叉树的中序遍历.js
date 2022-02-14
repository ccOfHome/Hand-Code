// 递归法
const inorderTraversal = function(root) {
    let res = []
    helper(root, res)
    return res
}

function helper(node, res) {
    if(!node) return
    // 中序遍历 左中右
    helper(node.left, res)
    res.push(node.val)
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
    let l = root.left
    while(stack.length !== 0 || l) {
        while(l) {
            stack.push(l)
            l = l.left
        }

        l = stack.pop()
        res.push(l.val)

        l = l.right
    }
    return res
}