import { lista, changeList } from '../../lista';

function removeItem(id: number): string {
  changeList(lista.filter((person) => person.id != id));

  return "Pessoa apagada.";
}

console.log(removeItem(1));
