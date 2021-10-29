import { lista, Person } from '../../lista';

function getName(id: number): string {
  for (let i = 0; i < lista.length; i++) {
    var person: Person = lista[i];

    if (person.id == id)
      return person.name;
  }

  return "A pessoa especificada não existe.";
}

console.log(getName(1));

