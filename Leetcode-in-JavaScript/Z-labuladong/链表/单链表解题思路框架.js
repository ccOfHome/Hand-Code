// 合并两个有序链表
class ListNode {
    constructor(val, next){
        this.val = val === undefined ? 0 : val 
        this.next = next === undefined ? null : next
    }
}

function mergeTwoLists(l1, l2) {
    // 虚拟头节点
    let p = null
    let p1 = l1, p2 = l2 // 指针
    while(pl != null && p2 != null) {
        if(p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = px.next
        }
        p = p.next
    }
    if(p1 != null) {
        p.next = p1
    }
    if(p2 != null) {
        p.next = p2
    }
    return p.next
}


// 合并k个升序链表
// 优先级队列(二叉堆) - 把链表节点放入一个最小堆，就可以每次获得 k 个节点中的最小节点
function mergeKLists(lists) {
    if(lists.length == 0) return null
    // 虚拟头节点
    let p = null


}

// 单链表的倒数第k个节点
// 复杂度 O(n)
function findFromEnd(head, k) {
    let p = head
    // p先走k步
    for(let i = 0; i < k; i++) {
        p = p.next
    }
    let p1 = head
    // p和p1同时走n-k步
    while(p != null) {
        p = p.next
        p1 = p1.next
    }
    // p1现在指向第n-k个节点
    return p1
}

// 删除链表的倒数第N个节点
function removeNthFromEnd(head, N) {
    // 虚拟头节点
    let p = null
    p.next = head
    // 删除倒数第n个，先找到倒数第n+1个节点
    let x = findFromEnd(p, n + 1)
    x.next = x.next.next
    return p.next
}

// 单链表的中点
// 快慢指针
function middleNode(head) {
    let slow = head, fast = head
    while(fast != null && fast.next != null) {
        // 慢指针走一步，快指针走两步
        slow = slow.next
        fast = fast.next.next
    }
    // 慢指针指向中点
    return slow
}

// 判断链表是否包含环
// 快慢指针
function hasCycle(head) {
    let slow = head, fast = head
    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fasr.next.next
        if(slow == fast) {
            return true
        }
    }
    return false
}
// 计算环的起点

