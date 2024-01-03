/* Input : 15
   Output: 51
*/

function reverseInteger(n) {
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInteger(15));
console.log(reverseInteger(-15));
