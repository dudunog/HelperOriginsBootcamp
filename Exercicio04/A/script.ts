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

function removeItem(id: number): void {
  changeList(list.filter((person: Person) => person.id != id));
}

function clickRemoveButton(event: Event): void {
  event.preventDefault();

  let anchor: HTMLAnchorElement = event.target as HTMLAnchorElement;
  removeItem(Number.parseInt(anchor.id));

  displayData();
}

function displayData(): void {
  tBody.innerHTML = '';
  list.forEach((person: Person) => {
    let tr: HTMLTableRowElement = document.createElement("tr");

    let nameTd: HTMLTableCellElement = document.createElement("td");
    nameTd.innerText = person.name;
    tr.appendChild(nameTd);
    
    let bioTd: HTMLTableCellElement = document.createElement("td");
    bioTd.innerText = person.bio;
    tr.appendChild(bioTd);

    let deleteTd: HTMLTableCellElement = document.createElement("td");
    let deleteAnchor: HTMLAnchorElement = document.createElement("a");
    deleteAnchor.id = `${person.id}`;
    deleteAnchor.innerText = "Excluir";
    deleteAnchor.href = "";
    deleteAnchor.onclick = (event) => clickRemoveButton(event);
  
    deleteTd.appendChild(deleteAnchor);
    
    tr.appendChild(deleteTd);

    tBody.appendChild(tr);
  });
}

displayData();
