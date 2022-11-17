const createNode = (value) =>{
    return{
        value: value,
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

// const linkedList = new LinkedList()
// linkedList.insert(2)
// linkedList.insert(4)
// linkedList.insert(3)
// linkedList.insert(4)
// console.log('Implementing LinkedList');
// linkedList.print()
// console.log(`Size: ${linkedList.length}`);

// linkedList.insertfirst(5)
// linkedList.insertfirst(6)
// linkedList.insert(7)
// linkedList.print()

// const linkedList2 = new LinkedList()
// linkedList2.insert(5)
// linkedList2.insert(6)
// linkedList2.insert(4)




/** IMPLEMENTANDO LISTA DOBLE ENLAZADA COMO LISTA DE NODOS */

const Node = (value) =>{
    return{
        value: value,
        previous: null,
        next: null
    }
}

class ListNode {
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    //metodo de insertar en la lista de Nodos el nodo creado.
    insert(value){
        let nuevonodo = Node(value)
        this.length++

        //pregunto si tiene elementos
        if(this.tail){
            this.tail.next = nuevonodo
            let temp = this.tail
            this.tail = nuevonodo
            this.tail.previous = temp

            return nuevonodo
        }

        this.head = this.tail = nuevonodo

        return nuevonodo
    }

    print(){
        let current = this.head
        let concat = ''
        while(current){
            concat += '['+current.value+']<-->'
            current = current.next
        }
        console.log('null<-->'+concat+'null');
    }

    printreverse(){
        let current = this.tail
        let concat = ''
        while(current){
            concat += '['+current.value+']<-->'
            current = current.previous
        }
        console.log('null<-->'+concat+'null');
    }
}

// let lista = new ListNode()
// lista.insert(1)
// lista.insert(2)
// lista.insert(3)
// lista.insert(4)
// lista.insert(5)
// console.log('Implementing double list');
// lista.print()
// lista.printreverse()