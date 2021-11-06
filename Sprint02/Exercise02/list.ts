import { Person } from './Person';

let list: Person[] = [
  new Person(1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"),
  new Person(2, "Alan Turing", "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"),
  new Person(3, "Nikola Tesla", "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."),
  new Person(4, "Nicolau Copérnico", "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."),
];

function changeList(newList: Person[]) {
  list = newList;
}

export { list, changeList }
