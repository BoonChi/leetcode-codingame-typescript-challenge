import { ListNode } from './ListNode';

export class ComputeSumFromListNode {
  static sum(
    listNode1: ListNode | null,
    listNode2: ListNode | null
  ): ListNode | null {
    const List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;

    while (listNode1 !== null || listNode2 !== null || sum > 0) {
      if (listNode1) {
        sum += listNode1.value;
        listNode1 = listNode1.next ? listNode1.next : null;
      }
      if (listNode2) {
        sum += listNode2.value;
        listNode2 = listNode2.next ? listNode2.next : null;
      }
      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      }
      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;
    }
    return List.next;
  }
}
