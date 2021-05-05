class Person{

    #dob
    constructor(name, surname, dob){
        this.name = 'Karci';
        this.surname = 'Jarci';
        this.#dob = dob;
    }

    #privateInfo(){
        let year = this.#dob.getFullYear();
        let month = ("0" + (this.#dob.getMonth() + 1)).slice(-2);
        let day = ("0" + this.#dob.getDate()).slice(-2);
        var date = day + "." + month + "." + year;
        return(this.name + ' ' + this.surname + ' ' + date);
    }

    infoPublic(){
        var result = this.#privateInfo().split(' ');
        console.log(result[0] + ' ' + result[1])
    }

    nested() {
        const printThis = () => console.log(this);
        printThis();
    }
}

