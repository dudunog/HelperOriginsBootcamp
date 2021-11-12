import { AdaLovelace } from './AdaLovelace';
import { AlanTuring } from './AlanTuring';
import { NicolauCopernico } from './NicolauCopernico';
import { NikolaTesla } from './NikolaTesla';
import { Person } from './Person';

/**
 * Represents a person factory.
 */
export class PersonFactory {
  /**
   * The factory method responsible for returning a person's information.
   *
   * @param id - the identifier
   * @returns string
   */
  public static getPerson(id: number): Person {
    const person: Person = Person.getPerson(id);

    switch (person._name) {
      case "Ada Lovelace":
        return new AdaLovelace(person._id, person._name, person._bio);
      case "Alan Turing":
        return new AlanTuring(person._id, person._name, person._bio);
      case "Nikola Tesla":
        return new NikolaTesla(person._id, person._name, person._bio);
      case "Nicolau Copérnico":
        return new NicolauCopernico(person._id, person._name, person._bio);
      default:
        throw Error("Not supported");
    }
  }
}