//Solution-1 
const capital = (str) => {
    let words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}

console.log(capital("hey this is rajkumar"))

//Solution-2

const capitalize = (str) => {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 0] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(capitalize("hey this is rajkumar"))