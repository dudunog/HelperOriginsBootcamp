type Person = {
  id: number;
  name: string;
  bio: string;
}

let list: Person[] = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function changeList(newLista: Person[]): void {
  list = newLista;
}

const tBody: HTMLElement = document.getElementById('tbody');

function displayData(): void {
  tBody.innerHTML = '';
  list.forEach((person: Person) => {
    const tr: HTMLTableRowElement = document.createElement("tr");

    const nameTd: HTMLTableCellElement = document.createElement("td");
    nameTd.innerText = person.name;
    tr.appendChild(nameTd);
    
    const bioTd: HTMLTableCellElement = document.createElement("td");
    bioTd.innerText = person.bio;
    tr.appendChild(bioTd);

    const deleteTd: HTMLTableCellElement = document.createElement("td");
    const deleteAnchor: HTMLAnchorElement = document.createElement("a");
    deleteAnchor.id = `${person.id}`;
    deleteAnchor.innerText = "Delete";
    deleteAnchor.href = "";
    deleteAnchor.onclick = (event) => clickRemoveButton(event);
  
    deleteTd.appendChild(deleteAnchor);
    
    tr.appendChild(deleteTd);

    const editTd: HTMLTableCellElement = document.createElement("td");
    const editAnchor: HTMLAnchorElement = document.createElement("a");
    editAnchor.id = `${person.id}`;
    editAnchor.innerText = "Edit";
    editAnchor.href = "";
    editAnchor.onclick = (event) => clickGoUpdate(event);

    editTd.appendChild(editAnchor);
    tr.appendChild(editTd);

    tBody.appendChild(tr);
  });
}

function displayEditData(id: number): void {
  const idField:HTMLInputElement = document.getElementById('idField') as HTMLInputElement;
  const nameField:HTMLInputElement = document.getElementById('nameField') as HTMLInputElement;
  const bioField: HTMLInputElement = document.getElementById('bioField') as HTMLInputElement;

  let person:Person = list.find((person: Person) => person.id === id);

  idField.value = person.id.toString();
  nameField.value = person.name;
  bioField.value = person.bio;
}

function clickRemoveButton(event: Event): void {
  event.preventDefault();

  const anchor: HTMLAnchorElement = event.target as HTMLAnchorElement;
  removeItem(Number.parseInt(anchor.id));

  displayData();
}

function removeItem(id: number): void {
  changeList(list.filter((person: Person) => person.id != id));
}

function clickGoUpdate(event: Event): void {
  event.preventDefault();

  const anchor: HTMLAnchorElement = event.target as HTMLAnchorElement;
  const containerEdit: HTMLElement = document.querySelector('.container-edit');
  containerEdit.hidden = false;

  displayEditData(Number.parseInt(anchor.id));
}

function changePerson(event: Event) {
  event.preventDefault();

  const idField:HTMLInputElement = document.getElementById('idField') as HTMLInputElement;
  const nameField:HTMLInputElement = document.getElementById('nameField') as HTMLInputElement;
  const bioField: HTMLInputElement = document.getElementById('bioField') as HTMLInputElement;

  let person: Person = list.find((person: Person) => person.id === Number.parseInt(idField.value));

  person.name = nameField.value;
  person.bio = bioField.value;

  displayData();
}

displayData();
