//-----------Solution 1 - Start-------------//

//Reverse String Solution
function palindromes(str) {
    let reverseStr = str.split("").reverse().join('');
    return reverseStr === str;
}
console.log(palindromes('tata'))
//-----------Solution 1 - End-------------//