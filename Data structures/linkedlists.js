class Node{
    constructor(data, next = null){
        this.data = data, 
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.insertAtBeginning = function(data) {
    let newNode = new Node(data)

    // setting next pointer to the old head
    newNode.next = this.head

    // setting the head to the new node 
    this.head = newNode
    
    return this.head
}

LinkedList.prototype.contains = function(data){
    let node = this.head
        
    while( node ){
        if(node.data === data) return true
        node = node.next
    }
    return false
}

LinkedList.prototype.insertAtEnd = function(data){
    let newNode = new Node(data);
    let node = this.head

    while(node.next !== null){
        node = node.next
    }
    node.next = newNode
    return this.head 
}

LinkedList.prototype.insertAt = function(index, data){
    let count = 0;
    let newNode = new Node(data)
    let node = this.head
    
    while(count !== index){
        count ++
    }

    let temp = node.next // linked lists cut from adding other node 
    node.next = newNode

    while(temp.next){
        this.insertAtEnd(temp)
        temp = temp.next
    }
    return this.head
}


// let list = new LinkedList()
// list.insertAtBeginning(5)
// list.insertAtBeginning(10)
// console.log(list.contains(5))
// list.insertAtEnd(4)
// list.insertAt(2, 9)
// console.log(list.contains(4))
// console.log(list)