import { list, Person } from '../../list';

function getBio(id: number): string {
  let person: Person = list.find((person: Person) => person.id === id);

  if (!person)
    return "A pessoa especificada não existe.";
    
  return person.bio;
}

console.log(getBio(1));
