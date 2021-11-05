import { list, IPerson, changeList } from '../../list';

/** 
* Represents a person.
*/
class Person {
  /**
  * The method responsible for removing a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static removePerson(id: number): string {
    let newPeople = [];
  
    for (let i = 0; i < list.length; i++) {
      let person: IPerson = list[i];
  
      if (person.id !== id)
        newPeople.push(person);
    }
  
    if (newPeople.length < 4) {
      (changeList(newPeople));
  
      return "Pessoa apagada.";
    }
  
    return "A pessoa especificada não existe.";
  }
}

console.log(Person.removePerson(1));
