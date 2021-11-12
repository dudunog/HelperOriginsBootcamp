"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeList = exports.list = void 0;
var list = [
    { "_id": 1, "_name": "Ada Lovelace", "_bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "_id": 2, "_name": "Alan Turing", "_bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "_id": 3, "_name": "Nikola Tesla", "_bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "_id": 4, "_name": "Nicolau Copérnico", "_bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
exports.list = list;
function changeList(newList) {
    exports.list = list = newList;
}
exports.changeList = changeList;
