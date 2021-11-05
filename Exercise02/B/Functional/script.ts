import { list, Person } from '../../list';

function getName(id: number): string {
  let person: Person = list.find((person: Person) => person.id === id);

  if (!person)
    return "A pessoa especificada não existe.";
    
  return person.name;
}

console.log(getName(1));

