

// var removeNthFromEnd = function(head, n) {
//     let fast = head;
//     let slow = head;
//     while(n-- > 0){
//           fast = fast.next;
//     }
//     let prev = null;
//     while(fast != null){
//         fast = fast.next;
//         prev = slow;
//         slow = slow.next;
//     }
//     if(prev == null){
//         return head.next;
//     }
//     prev.next = slow.next;
//     slow.next = null;
//     return head;

// };
// console.log(removeNthFromEnd(head = [1,2], n = 1));

// var removeNthFromEnd = function(head, n) {
//     var n1 = new ListNode();
//    var n2 = new ListNode();
//    var dummy = n2;
   
//    n1.next = head;
//    n2.next = head;
   
//    while(n > 0 && n1){
//        n1 = n1.next;
//        n--;
//    }
   
//    if(n > 0){
//        return head;
//    }
   
//    while(n1 && n1.next){
//        n1 = n1.next;
//        n2 = n2.next;
//    }
   
//    n2.next = n2.next.next;
   
//    return dummy.next;
// };
// console.log(removeNthFromEnd(head = [1,2], n = 1));

// var head = [1,2]
// var n = 1;
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};
console.log(removeNthFromEnd(head = [1,2], n = 1));