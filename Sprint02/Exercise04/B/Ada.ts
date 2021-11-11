import { Person } from "./Person";

/**
* Represents the Ada.
*/
export class Ada extends Person {
  private _language: string;

  public constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
    this._language = "Ada";
  }

  /**
  * The method responsible for returning Ada's language.
  *
  * @returns string
  */
  public getLanguage(): string {
    return this._language;
  }

  public static verifyIsAda(person: Person): Person {
    if (person.getName().toLowerCase() == "ada lovelace")
      return new Ada(person.getId(), person.getName(), person.getBio());
    else
      return new Person(person.getId(), person.getName(), person.getBio());
  }
}