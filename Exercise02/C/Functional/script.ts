import { list, Person, changeList } from '../../list';

function removeItem(id: number): string {
  changeList(list.filter((person: Person) => person.id != id));

  return "Pessoa apagada.";
}

console.log(removeItem(1));
