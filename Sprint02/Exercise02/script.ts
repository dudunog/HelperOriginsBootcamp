import { list } from './list';
import { Person } from './Person';
import { PersonImperative } from './PersonImperative';

//get bio - functional
console.log(Person.getBio(3));

//get bio - imperative
console.log(PersonImperative.getBio(1));

//get name - functional
console.log(Person.getName(1));

//get name - imperative
console.log(PersonImperative.getName(1));

//show the list
console.log(list);

//remove person - functional
console.log(Person.remove(1));

//show the list
console.log(list);

//remove person - imperative
console.log(PersonImperative.remove(3));

//show the list
console.log(list);

//change the list - functional
// console.log(Person.changePerson(4, { name: "Eduardo Nogueira", bio: "Eduardo é um programador web" }));
console.log(Person.changePerson(2, new Person(null, "Eduardo Nogueira", "Eduardo é um programador web")));

//change the list
console.log(list);

//change the list - imperative
console.log(Person.changePerson(4, new Person(null, "Bill Gates", "Bill Gates é um magnata, empresário, diretor executivo, investidor, filantropo e autor americano, que ficou conhecido por fundar, junto com Paul Allen a Microsoft.")));

//change the list
console.log(list);
