/**
 * You are given the heads of two sorted linked lists list1 and list2
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * 
 * return the head of the merged linked list.  
 */
const createNode = (value) =>{
    return{
        val: value,
        next: null,
    }
}

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    insert(value){
        this.length++
        let newNode = createNode(value)
        if(this.tail){
            this.tail.next = newNode
            this.tail = newNode
            return newNode
        }
        this.head = this.tail = newNode
        return newNode
    }

    insertfirst(value){
        let nuevo = createNode(value)
        if(this.tail){
            nuevo.next = this.head
            this.head = nuevo
            return nuevo
        }
        this.head = this.tail = nuevo
        return nuevo
    }

    print(){
        let current = this.head
        let concat = ''
        while(current){
            concat += '['+current.value+']->'
            current = current.next
        }
        console.log(concat+this.tail.next);
    }
}

const mergeTwoLists = (list1, list2) => {
 let nuevonodo = new LinkedList()
 let result = nuevonodo
 
 while(list1.head || list2.head){
    let valor1 = list1.head.val
    let valor2 = list2.head.val
    if(valor1 < valor2){
        nuevonodo.insert(valor1)
        list1.head = list1.head.next
     }else if(valor1 === valor2){
       nuevonodo.insert(valor1)
       nuevonodo.insert(valor2)
       list1.head = list1.head.next
       list2.head = list2.head.next
     }else if(valor1 > valor2){
        nuevonodo.insert(valor2)
        list2.head = list2.head.next
     }
 }

 return result.head

};

let list1 = new LinkedList()
list1.insert(1)
list1.insert(2)
list1.insert(4)

let list2 = new LinkedList()
list2.insert(1)
list2.insert(3)
list2.insert(4)


console.log(mergeTwoLists(list1, list2));
