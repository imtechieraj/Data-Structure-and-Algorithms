//-----------Solution 1 - Start-------------//

//Reverse String Solution
function palindromes(str) {
    let reverseStr = str.split("").reverse().join('');
    return reverseStr === str;
}
console.log(palindromes('kakak'))
//-----------Solution 1 - End-------------//


//-----------Solution 2 - Start-------------//
function palindromes2(str) {
    return str.split('').every((_item, i) => {
        return _item === str[str.length - i - 1]
    });
}
console.log(palindromes2('kakak'))
//-----------Solution 2 - End-------------//