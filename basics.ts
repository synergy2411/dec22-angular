let x: string = "101";
let numbers: Array<number> = [1, 2, 3, 4, 5]
let friends: Array<string> = ["", "", ""]
let getDetails: Function = () => { }
let dob: Date = new Date("Dec 1, 1983")

let age: string | number = "Twenty Two"
age = 32;


// type Product = {
//     id : string;
//     prodName : string;
//     qty : number;
//     expiry : Date
// }

interface Product {
    id: string;
    prodName: string;
    qty: number;
    expiry: Date
}

let iPhone: Product = {
    id: "P001",
    prodName: "Iphone 14",
    qty: 32,
    expiry: new Date("Dec 2 2024")
}



class Person {
    constructor(private name: string) { }
    run() {
        return "Running..."
    }
}


class Student {
    // private studId : number;
    // private studName : string;
    // constructor(studId : number, studName : string){
    //     this.studId = studId;
    //     this.studName = studName;
    // }

    // Constructor Injection
    constructor(
        private studId: number,
        private studName: string,
        private person: Person) { }

    public fetchDetails(): string {
        return `${this.studId} -> ${this.studName} is ${this.person.run()}`
    }

}

let foo = new Student(1001, "Foo BAr", new Person("Foo Bar"));
console.log(foo.fetchDetails())




// GENERICS : Placeholder for Types, <T>
function addAtBeginning<T>(val: T, arr: Array<T>): Array<T> {
    return [val, ...arr]
}

const numberArray = addAtBeginning<number>(99, [101, 103, 105])

const stringArray = addAtBeginning<string>("Hello", ["How", "are", "You", "?"])

// stringArray[0].

// numberArray[0].


interface Resource<T, U> {
    resourceId: T;
    serverStatus: U;
}

let serverOne: Resource<number, boolean> = {
    resourceId: 99,
    serverStatus: true
}

let serverTwo: Resource<string, boolean> = {
    resourceId: "R001",
    serverStatus: false
}