"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function removeItem(id) {
    (0, list_1.changeList)(list_1.list.filter(function (person) { return person.id !== id; }));
    return "Pessoa apagada.";
}
console.log(removeItem(1));
