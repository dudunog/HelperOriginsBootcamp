import { PersonFactory } from "./PersonFactory";

let person = PersonFactory.getPerson(2);
console.log(person);
let person2 = PersonFactory.getPerson(4);
console.log(person2);
let person3 = PersonFactory.getPerson("alan");
console.log(person3);
