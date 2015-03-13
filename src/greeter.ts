interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname;
}

var user:Person = {firstname: "Jane", lastname: "user"};

document.body.innerHTML = greeter(user);