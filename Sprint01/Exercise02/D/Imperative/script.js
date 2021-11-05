"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function changePerson(id, change) {
    for (var i = 0; i < list_1.list.length; i++) {
        var person = list_1.list[i];
        if (person.id === id) {
            person.name = change.name;
            person.bio = change.bio;
            return "Pessoa mudada";
        }
    }
    return 'Impossível alterar. Pessoa inexistente.';
}
console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
