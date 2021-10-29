import { list } from '../../list';

type PersonChange = {
  name: string;
  bio: string;
}

function changePerson(id: number, change: PersonChange): string {
  var person = list.find((person) => person.id == id);

  if (!person)
    return 'Impossível alterar. Pessoa inexistente.';

  if (typeof change.name == "string")
    person.name = change.name;

  if(typeof change.bio == "string")
    person.bio = change.bio;

  return "Pessoa mudada";
}

console.log(changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
