function handlerQtdVowels(e: Event) {
  e.preventDefault();

  let word = document.getElementById("word") as HTMLSelectElement;
  let response = document.getElementById('response');

  response.innerHTML = returnQtdVowelsForm(word.value);
}

function returnQtdVowelsForm(word: string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  return word.split('').filter(l => vogais.includes(l.toLowerCase())).length.toString();
}