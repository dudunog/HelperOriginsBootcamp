"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function changePerson(id, change) {
    var person = list_1.list.find(function (person) { return person.id === id; });
    if (!person)
        return 'Impossível alterar. Pessoa inexistente.';
    if (typeof change.name === "string")
        person.name = change.name;
    if (typeof change.bio === "string")
        person.bio = change.bio;
    return "Pessoa mudada";
}
console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
