"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function removeItem(id) {
    var newPeople = [];
    for (var i = 0; i < list_1.list.length; i++) {
        var person = list_1.list[i];
        if (person.id !== id)
            newPeople.push(person);
    }
    if (newPeople.length < 4) {
        ((0, list_1.changeList)(newPeople));
        return "Pessoa apagada.";
    }
    return "A pessoa especificada não existe.";
}
console.log(removeItem(1));
