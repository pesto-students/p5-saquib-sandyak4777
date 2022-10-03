class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = Node("A");
const b = Node("B");
const c = Node("C");
const d = Node("D");
const e = Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
