import { lista, Person } from '../../lista';

function getBio(id: number): string {
  var person: Person = lista.find((person) => person.id == id);

  if (!person)
    return "A pessoa especificada não existe.";
    
  return person.bio;
}

console.log(getBio(1));
