const palindromes = function (word) {
    let re = /[\W_]/g;
    let cleanWord = word.toLowerCase().replace(re,'');
    reverseWord = cleanWord.split('').reverse().join('');
    return cleanWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
