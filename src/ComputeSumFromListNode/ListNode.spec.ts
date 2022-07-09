import { ListNode } from './ListNode';

describe('ListNode', () => {
  describe('has no value', () => {
    test('return ListNode 0', () => {
      const listNode1 = new ListNode();
      const lastNode = new ListNode(0);
      expect(listNode1).toStrictEqual(lastNode);
      expect(listNode1.next).toBe(null);
    });

    test('return ListNode 2->4->3', () => {
      const listNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
      expect(listNode1.value).toBe(2);
      expect(listNode1.next).toHaveProperty('value');
    });
  });
});
