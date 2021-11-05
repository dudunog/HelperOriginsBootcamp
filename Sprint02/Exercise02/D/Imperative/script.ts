import { list, IPerson } from '../../list';

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
    for (let i = 0; i < list.length; i++) {
      let person: IPerson = list[i];
  
      if (person.id === id) {
        person.name = change.name;
        person.bio = change.bio;
  
        return "Pessoa mudada";
      }
    }
  
    return 'Impossível alterar. Pessoa inexistente.';
  }
}

console.log(Person.changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web." }));
