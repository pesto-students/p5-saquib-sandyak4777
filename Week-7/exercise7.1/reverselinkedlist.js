class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const printLinkedListElement = (head) => {
  let current = head;
  while (current !== null) {
    // console.log("values", current.value);
    current = current.next;
  }
};

printLinkedListElement(a);

const reverseLinkedListElements = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    console.log("values", current.value);
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

const reverse = reverseLinkedListElements(a);
console.log("reverse", reverse);
