class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
      return removedNode.value;
    }
  
    removeValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        return null;
      }
    }
  
    search(value) {
      if (this.isEmpty()) {
        return -1;
      }
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  }
  
  const l = new LinkedList();
  
  console.log(l.isEmpty()); // true;
  l.append(50);
  l.prepend(20);
  l.append(80);
  l.insert(60, 2);
  console.log(l.getSize()); // 4
  l.print(); // 20 50 60 80
  l.reverse();//80 60 50 20
  l.print(); 
  console.log(l.search(60)); // 1
  l.removeFrom(4); //
  console.log(l.getSize()); //4
  l.print(); // 80 60 50 20 
  l.removeValue(80); // 60 50 20
  l.print(); // 
  console.log(l.getSize()); //3
  l.print(); // 60 50 20 


  
// --------------- output that will print after running the above code 
//   true
// 4
// 20->50->60->80->
// 80->60->50->20->
// 1
// 4
// 80->60->50->20->
// 60->50->20->
// 3
// 60->50->20->
  