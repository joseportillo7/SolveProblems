class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
        return this.stack
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
    size(){
        return this.stack.length
    }
    print(){
        console.log(this.stack);
    }
}

const pila = new Stack()

const end = [']','}',')']
const characters = ['()','[]','{}']

const characterSequence = (cadena) =>{
    let splitters = cadena.split('')
    
    let bandera = true
    //I'm going to serch a specific character
    splitters.forEach(element => {
        if('([{'.includes(element)){
            pila.push(element)
        }else{
            let lasthchar = pila.pop()
            let join = lasthchar + element
            
            if(characters.some(e => e === join)){
                console.log(join);
            }else{  
                bandera = false          
                return false
            } 
        }
        
    });

    if(pila.size() > 0){
        return false
    }
    return bandera
 }

module.exports.stack = {
    characterSequence
}