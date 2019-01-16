import { greeter } from "./hello.js";
const user = "victor";
console.log(user);
console.log(greeter(user));
document.body.innerHTML = greeter(user);