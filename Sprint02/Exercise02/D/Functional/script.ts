import { list } from '../../list';

type PersonChange = {
  name: string;
  bio: string;
}

/** 
* Represents a person.
*/
class Person {
  /**
  * The method responsible for changing a person's information by their id.
  *
  * @param id - the identifier
  * @param change - the person with changes
  * @returns string
  */
  static changePerson(id: number, change: PersonChange): string {
    let person = list.find((person) => person.id === id);
  
    if (!person)
      return 'Impossível alterar. Pessoa inexistente.';
  
    if (typeof change.name === "string")
      person.name = change.name;
  
    if(typeof change.bio === "string")
      person.bio = change.bio;
  
    return "Pessoa mudada";
  }
}

console.log(Person.changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
