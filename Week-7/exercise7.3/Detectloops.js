let head;

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

// head=null;

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
        //console log below gives which has two pointers to its memory address location
        //console.log("value",rabitPointer.data)
        return true;
      }
    }
  }

  //can use method 1
//   const giveElements = [1,3,4];
//   for(i=0;i<giveElements.length;i++){
//     push(giveElements[i]);
//     head.next=head;
//   }

//method2
push(20);
push(4);
push(15);
push(10);
// creating loop thing add next number of times element is present
head.next.next.next.next = head;

const result = detectLoop();
console.log("result", result);