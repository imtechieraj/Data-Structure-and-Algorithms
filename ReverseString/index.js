/* Input : apple
   Output: elppa
*/

function reverseString(str){
    let str_arr=str.split("");
    let reverse=str_arr.reverse();
    let reverse_str=reverse.join('');
    console.log(reverse_str)
}

reverseString("apple");