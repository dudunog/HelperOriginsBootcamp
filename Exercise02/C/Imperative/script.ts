import { list, changeList, Person } from '../../list';

function removeItem(id: number): string {
  let newPeople = [];

  for (let i = 0; i < list.length; i++) {
    let person: Person = list[i];

    if (person.id !== id)
      newPeople.push(person);
  }

  if (newPeople.length < 4) {
    (changeList(newPeople));

    return "Pessoa apagada.";
  }

  return "A pessoa especificada não existe.";
}

console.log(removeItem(1));
