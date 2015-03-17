interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person:Person) {
    return "Hello, " + person.firstname;
}

const f:number = 3;
console.log(f);

var user:Person = {firstname: "Jane", lastname: "user"};

document.body.innerHTML = greeter(user);