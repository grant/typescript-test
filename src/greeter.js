function greeter(person) {
    return "Hello, " + person.firstname;
}
const f = 3;
console.log(f);
var user = { firstname: "Jane", lastname: "user" };
document.body.innerHTML = greeter(user);
