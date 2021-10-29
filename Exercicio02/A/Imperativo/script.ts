import { lista, Person } from '../../lista';

function getBio(id: number): string {
  for (let i = 0; i < lista.length; i++) {
    var person: Person = lista[i];

    if (person.id == id)
      return person.bio;
  }

  return "A pessoa especificada não existe.";
}

console.log(getBio(1));
