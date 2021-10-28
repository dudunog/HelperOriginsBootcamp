import { lista, Person } from '../../lista';

function getName(id: number): string {
  var person: Person = lista.find((person) => person.id == id);

  if (!person)
    return "A pessoa especificada não existe.";
    
  return person.name;
}

console.log(getName(1));

