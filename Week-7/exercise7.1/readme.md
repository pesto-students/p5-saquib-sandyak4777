This is to implement linked list and then reverse them


linked list  looks like this below

 head ---> A  ----> B ----> C ----> D ----> E ----> null

 Each element has value and address or memory location of the next element

 so for example lets consider  head ----> A ----> B

 here A node has its own value and also A has information of memory location of B located 


 To reverse linked list basically it should look like below

  null <---- A  <---- B <---- C <---- D <---- E <---- head

Initialize three pointers prev as NULL, curr as head and next as NULL.
Iterate through the linked list. In loop, do following. 
// Before changing next of current, 
// store next node 
next = curr->next
// Now change next of current 
// This is where actual reversing happens 
curr->next = prev 
// Move prev and curr one step forward 
prev = curr 
curr = next