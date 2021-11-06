function handlerAmountVowels(e) {
    e.preventDefault();
    var wordInputElement = document.getElementById('word');
    var response = document.getElementById('response');
    response.innerHTML = "Quantidade de vogais: " + amountVowels(wordInputElement.value) + ".";
}
function amountVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return word.split('').filter(function (letter) { return vowels.includes(letter.toLowerCase()); }).length.toString();
}
