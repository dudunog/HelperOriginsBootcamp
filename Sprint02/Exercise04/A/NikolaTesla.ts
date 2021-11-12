import { Person } from './Person';

/**
* Represents a person.
*/
export class NikolaTesla extends Person {
  public _id?: number;
  public _name: string;
  public _bio: string;

  public constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }
}
