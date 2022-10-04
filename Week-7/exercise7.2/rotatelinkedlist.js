let head;

// Linked list Node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const rotate = (k) => {
  if (k == 0) return;

  let current = head;
  let count = 1;

  while (count < k && current != null) {//count=1 , current-->20  //count=2 ,current--->30, //count=3, current--->40
    current = current.next;                
    count++;
  }

  if (current == null) return;

  let kthNode = current;

  while (current.next != null) current = current.next;

  current.next = head;
  head = kthNode.next;
  kthNode.next = null;
}

const push = (new_data) => {
  let new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

const printList =() => {
  let temp = head;
  while (temp != null) {
    console.log('value', temp.data)
    temp = temp.next;
  }
}

// Create a list
// 10->20->30->40->50->60
for (i = 60; i >= 10; i -= 10) push(i);

// printList(head);

rotate(4);

printList();
