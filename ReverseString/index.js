/* Input : apple
   Output: elppa
*/

//Solution-1
function reverseString(str) {
    let str_arr = str.split("");
    let reverse = str_arr.reverse();
    let reverse_str = reverse.join('');
    console.log(reverse_str)
}

//Solution-2

function reverseString2(str) {
    let reverse = '';
    for (let character of str) {
        reverse = character + reverse;
    }
    console.log(reverse)
}

reverseString("apple");
reverseString2("apple");