function amountVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return word.split('').filter(function (letter) { return vowels.includes(letter.toLowerCase()); }).length;
}
console.log(amountVowels("Squad GAMA"));
