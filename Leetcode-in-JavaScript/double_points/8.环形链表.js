const hasCycle = function(head) {
    // 慢指针
    let slow = head
    // 快指针
    let fast = head

    while(fast && fast.next) {
        // 一次一步
        slow = slow.next
        // 一次两步
        fast = fast.next.next
        // 快慢指针相遇
        if(slow === fast) {
            return true
        }
    }
    return false
}

function ListNode(val) {
    this.val = val
    this.next = null
}