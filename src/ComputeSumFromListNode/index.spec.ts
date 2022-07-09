import { ComputeSumFromListNode } from './index';
import { ListNode } from './ListNode';

describe('ComputeSumFromListNode', () => {
  describe('has non-empty list node', () => {
    test('return ListNode 7->0->8', () => {
      const listNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
      const listNode2 = new ListNode(5, new ListNode(6, new ListNode(4)));
      const lastNode = new ListNode(7, new ListNode(0, new ListNode(8)));
      expect(ComputeSumFromListNode.sum(listNode1, listNode2)).toStrictEqual(
        lastNode
      );
    });

    test('return ListNode 0', () => {
      const listNode1 = new ListNode(0);
      const listNode2 = new ListNode(0);
      expect(ComputeSumFromListNode.sum(listNode1, listNode2)).toStrictEqual(
        listNode2
      );
    });

    test('return ListNode 8->9->9->0->0->1', () => {
      const listNode1 = new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      );
      const listNode2 = new ListNode(9, new ListNode(9, new ListNode(9)));
      const lastNode = new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(1))))
        )
      );
      expect(ComputeSumFromListNode.sum(listNode1, listNode2)).toStrictEqual(
        lastNode
      );
    });
  });
});
