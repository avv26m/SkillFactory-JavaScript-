function acceptNumber(a){
    return function (b){
        return a+b
    }
}

let sumFunction = acceptNumber(2)
let sum = sumFunction(5)
console.log(sum)