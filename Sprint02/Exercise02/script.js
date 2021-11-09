"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var Person_1 = require("./Person");
var PersonImperative_1 = require("./PersonImperative");
//get bio - functional
console.log(Person_1.Person.getBio(3));
//get bio - imperative
console.log(PersonImperative_1.PersonImperative.getBio(1));
//get name - functional
console.log(Person_1.Person.getName(1));
//get name - imperative
console.log(PersonImperative_1.PersonImperative.getName(1));
//show the list
console.log(list_1.list);
//remove person - functional
console.log(Person_1.Person.remove(1));
//show the list
console.log(list_1.list);
//remove person - imperative
console.log(PersonImperative_1.PersonImperative.remove(3));
//show the list
console.log(list_1.list);
//change the list - functional
// console.log(Person.changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web" }));
console.log(Person_1.Person.changePerson(2, new Person_1.Person(null, "Eduardo Nogueira", "Eduardo é um programador web")));
//change the list
console.log(list_1.list);
//change the list - imperative
console.log(Person_1.Person.changePerson(4, new Person_1.Person(null, "Bill Gates", "Bill Gates é um magnata, empresário, diretor executivo, investidor, filantropo e autor americano, que ficou conhecido por fundar, junto com Paul Allen a Microsoft.")));
//change the list
console.log(list_1.list);
