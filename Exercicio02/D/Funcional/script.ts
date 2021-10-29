import { list } from '../../list';

type PersonChange = {
  name: string;
  bio: string;
}

function changePerson(id: number, change: PersonChange): string {
  var person = list.find((person) => person.id == id);

  if (!person)
    return 'Impossível alterar. Pessoa inexistente.';

  person.name = change.name;
  person.bio = change.bio;

  return "Pessoa mudada";
}

console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
