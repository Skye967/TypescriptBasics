// same 
// type Addfn = (a: number, b: number) => number;
interface Addfn {
    (a: number, b: number): number
}

let add: Addfn;

add = (n1: number, n2: number) => {
    return n1 + n2
}

// question mark after property makes it optional
interface Named {
    readonly name?: string;
    outputName?: string;
}


interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable{
    name?: string;
    age = 33;

    // you can also add the question mark to make optional parameters
    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        } else {
            console.log('Hi!')
        }
    }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am')

console.log(user1);