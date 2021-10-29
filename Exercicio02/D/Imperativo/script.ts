import { lista, Person } from '../../lista';

type PersonChange = {
  name: string;
  bio: string;
}

function changePerson(id: number, change: PersonChange): string {
  for (let i = 0; i < lista.length; i++) {
    let person: Person = lista[i];

    if (person.id == id) {
      person.name = change.name;
      person.bio = change.bio;

      return "Pessoa mudada";
    }
  }

  return 'Impossível alterar. Pessoa inexistente.';
}

console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
