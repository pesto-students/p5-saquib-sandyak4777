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

push(20);
push(4);
push(15);
push(10);