import { list, changeList } from '../../list';

function removeItem(id: number): string {
  changeList(list.filter((person) => person.id != id));

  return "Pessoa apagada.";
}

console.log(removeItem(1));
