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
function findFromEnd(head, k) {
    let p = head
    for(let i = 0; i < k; i++) {
        p = p.next
    }
    let p1 = head
    while(p != null) {
        p = p.next
        p1 = p1.next
    }
    return p1
}

// 单链表的中点


