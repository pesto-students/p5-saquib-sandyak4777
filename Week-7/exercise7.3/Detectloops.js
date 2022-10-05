let head;

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

head=null;

const push = (data) =>{
    let new_node = new Node(data);
    new_node.next = head;
    head = new_node;
}

function detectLoop() {
    let tortoisePointer = head,
      rabitPointer = head;
  
    while (tortoisePointer != null && rabitPointer != null && rabitPointer.next != null) {
      tortoisePointer = tortoisePointer.next;
      rabitPointer = rabitPointer.next.next;
      if (tortoisePointer == rabitPointer) {
        return true;
      }
    }
  }

push(20);
push(4);
push(15);
push(10);

head.next.next.next.next = head;

const result = detectLoop();
console.log("result", result);