/**
 * @param {number[]} nums
 * @return {number}
 */

/* Solution-1 */

var removeDuplicates = function (dub_arr) {
    // let dub_arr = [1, 1, 2];
    let output_arr = [];
    let _temp;
    for (let i = 0; i < dub_arr.length; i++) {
        if (dub_arr[i] !== _temp) {
            output_arr.push(dub_arr[i]);
            _temp = dub_arr[i];
        }
    } return output_arr;
};

// console.log(removeDuplicates([1, 1, 2]));

/* Solution-2 */

var removeDuplicates2 = (dub_arr) => {
    let obj = {};
    for (let i of dub_arr) {
        obj[i] = true;
    }
    let outputArr = Object.keys(obj).map(Number);
    return outputArr;
}

// console.log(removeDuplicates2([1,1,2,2]))

/* Solution-3 */

var removeDuplicates3 = (dub_arr) => {
    //Set is accept only unique value
    return [...new Set(dub_arr)];
}

console.log(removeDuplicates3([1, 1, 2, 2]))
