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


const printLinkedListElement = (head) =>{
    const current=head;
    while(current!== null){
        console.log("values",head.val);
        current=current.next;
    }
}

printLinkedListElement(a);