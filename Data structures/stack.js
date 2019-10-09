class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next  
    }
}

class Stack{
    constructor(){
        this.head = null
    }
}

Stack.prototype.push = function(data) {
    let newNode = new Node(data)
    let node = this.head 

    if(node === null){
        this.head = newNode
    }
    this.head = newNode 
    newNode.next = node
}

Stack.prototype.pop = function() {
    let node = this.head 
    this.head = node.next
}

Stack.prototype.search = function(target) {
    let node = this.head 

    while(node){
        if(node.data === target){
            return true;
        }
        node = node.next 
    }
    return false
}

Stack.prototype.size = function() {
    let node = this.head 
    let count = 0

    while(node){
        count ++
        node = node.next 
    }
    return count
}

// let stack = new Stack()
// stack.push(5)
// stack.push(6)
// stack.push(12)
// stack.push(11)
// stack.pop()
// console.log(stack.size()) // 3
// console.log(stack.search(5)) // true
// console.log(stack)
// console.log(stack.head.next)
