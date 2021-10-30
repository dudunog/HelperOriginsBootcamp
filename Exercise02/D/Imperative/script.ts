import { list, Person } from '../../list';

type PersonChange = {
  name: string;
  bio: string;
}

function changePerson(id: number, change: PersonChange): string {
  for (let i = 0; i < list.length; i++) {
    let person: Person = list[i];

    if (person.id == id) {
      person.name = change.name;
      person.bio = change.bio;

      return "Pessoa mudada";
    }
  }

  return 'Impossível alterar. Pessoa inexistente.';
}

console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
