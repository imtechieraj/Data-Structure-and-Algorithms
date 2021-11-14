const balancedParens = (str) => {
    return !str.split('').reduce((preVal, char) => {
        if(preVal<0){
            return preVal
        }
        if(char==="("){
            return ++preVal;
        }if(char===")"){
            return --preVal;
        }
        return preVal;
    },0)
}

console.log(balancedParens(')('))