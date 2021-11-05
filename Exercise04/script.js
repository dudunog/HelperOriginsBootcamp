var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function changeList(newLista) {
    list = newLista;
}
var tBody = document.getElementById('tbody');
function displayData() {
    tBody.innerHTML = '';
    list.forEach(function (person) {
        var tr = document.createElement("tr");
        var nameTd = document.createElement("td");
        nameTd.innerText = person.name;
        tr.appendChild(nameTd);
        var bioTd = document.createElement("td");
        bioTd.innerText = person.bio;
        tr.appendChild(bioTd);
        var deleteTd = document.createElement("td");
        var deleteAnchor = document.createElement("a");
        deleteAnchor.id = "" + person.id;
        deleteAnchor.innerText = "Delete";
        deleteAnchor.href = "";
        deleteAnchor.onclick = function (event) { return clickRemoveButton(event); };
        deleteTd.appendChild(deleteAnchor);
        tr.appendChild(deleteTd);
        var editTd = document.createElement("td");
        var editAnchor = document.createElement("a");
        editAnchor.id = "" + person.id;
        editAnchor.innerText = "Edit";
        editAnchor.href = "";
        editAnchor.onclick = function (event) { return clickGoUpdate(event); };
        editTd.appendChild(editAnchor);
        tr.appendChild(editTd);
        tBody.appendChild(tr);
    });
}
function displayEditData(id) {
    var idField = document.getElementById('idField');
    var nameField = document.getElementById('nameField');
    var bioField = document.getElementById('bioField');
    var person = list.find(function (person) { return person.id === id; });
    idField.value = person.id.toString();
    nameField.value = person.name;
    bioField.value = person.bio;
}
function clickRemoveButton(event) {
    event.preventDefault();
    var anchor = event.target;
    removeItem(Number.parseInt(anchor.id));
    displayData();
}
function removeItem(id) {
    changeList(list.filter(function (person) { return person.id != id; }));
}
function clickGoUpdate(event) {
    event.preventDefault();
    var anchor = event.target;
    var containerEdit = document.querySelector('.container-edit');
    containerEdit.hidden = false;
    displayEditData(Number.parseInt(anchor.id));
}
function changePerson(event) {
    event.preventDefault();
    var idField = document.getElementById('idField');
    var nameField = document.getElementById('nameField');
    var bioField = document.getElementById('bioField');
    var person = list.find(function (person) { return person.id === Number.parseInt(idField.value); });
    person.name = nameField.value;
    person.bio = bioField.value;
    displayData();
}
displayData();
