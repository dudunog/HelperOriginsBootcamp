"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeList = exports.list = void 0;
var Person_1 = require("./Person");
var list = [
    new Person_1.Person(1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"),
    new Person_1.Person(2, "Alan Turing", "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"),
    new Person_1.Person(3, "Nikola Tesla", "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."),
    new Person_1.Person(4, "Nicolau Copérnico", "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."),
];
exports.list = list;
function changeList(newList) {
    exports.list = list = newList;
}
exports.changeList = changeList;
