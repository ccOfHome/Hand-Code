const removeNNode = function (head, n) {
    // 添加一个虚头节点再开始遍历，防止删除的元素为头节点
    let headNode = new ListNode(null)
    headNode.next = head

    let slow = headNode,
        fast = headNode

    // 快指针到达第N个节点
    while (n--) {
        fast = fast.next
    }

    // 快慢指针一块移动 快指针到末尾慢指针就到length-n的位置了
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    // 直接删除倒数第N个节点（实际上是越过）
    slow.next = slow.next.next

    return headNode.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}