import { list, Person } from '../../list';

function getName(id: number): string {
  for (let i = 0; i < list.length; i++) {
    var person: Person = list[i];

    if (person.id == id)
      return person.name;
  }

  return "A pessoa especificada não existe.";
}

console.log(getName(1));

