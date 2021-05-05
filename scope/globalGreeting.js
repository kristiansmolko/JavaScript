/*
{
    let hello = "hello"
    console.log(hello)
}

// console.log(hello)

{
    var bye = "bye"
    console.log(bye)
}

console.log(bye)
*/

function englishGreeting() {
    return "hello"
}

englishGreeting2 = function() {
    return "hi"
}

shortGreet = () => "Hello there"

greetPerson = person => "Hi " + person

function printThis(){
    console.log(this)
}



class Owner{
    constructor(name){
        this.name = name
    }

    printThis2 = () => this
}

let karol = new Owner("Karci")