import { list, Person } from '../../list';

function getBio(id: number): string {
  for (let i = 0; i < list.length; i++) {
    let person: Person = list[i];

    if (person.id == id)
      return person.bio;
  }

  return "A pessoa especificada não existe.";
}

console.log(getBio(1));
