//You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  // Create a min-heap
  const heap = new MinHeap();

  // Insert the head nodes of all linked lists into the min-heap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      heap.insert(lists[i]);
    }
  }

  // Create a dummy node as the head of the merged list
  const dummy = new ListNode();
  let current = dummy;

  // Merge the lists using the min-heap
  while (!heap.isEmpty()) {
    const minNode = heap.extractMin();

    // Append the minimum node to the merged list
    current.next = minNode;
    current = current.next;

    if (minNode.next !== null) {
      // Insert the next node of the minimum node into the min-heap
      heap.insert(minNode.next);
    }
  }

  return dummy.next;
}

// MinHeap class implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.shift();
    }

    const minNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return minNode;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex].val < this.heap[parentIndex].val
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    let smallestChildIndex = currentIndex;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].val < this.heap[smallestChildIndex].val
    ) {
      smallestChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].val < this.heap[smallestChildIndex].val
    ) {
      smallestChildIndex = rightChildIndex;
    }

    if (smallestChildIndex !== currentIndex) {
      this.swap(currentIndex, smallestChildIndex);
      this.heapifyDown(smallestChildIndex);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const lists = [list1, list2, list3];

const mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = '';
  while (current !== null) {
    result += current.val + ' -> ';
    current = current.next;
  }
  result += 'null';
  console.log(result);
}
