//example № 1
// function getTypeOfNumbers() {
//     const arr = [0, null, NaN, 0, 1, 2, 4, "str"]
//
//     let even = 0,
//         odd = 0,
//         zero = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//             if (arr[i] === 0) {
//                 zero += 1;
//             } else if (arr[i] % 2 === 0) {
//                 even += 1;
//             } else {
//                 odd += 1;
//             }
//         }
//     }
//
//     console.log('четных элементов: ', even)
//     console.log('нечетных элементов: ', odd)
//     console.log('нулей: ', zero)
// }
//
// getTypeOfNumbers()

//example № 2
// function getNumbers(number) {
//     let values = true;
//     let result;
//
//     if (number > 1 && number <= 1000) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 values = false;
//             }
//         }
//         result = values ? `Число ${number} - простое число` : `Число ${number} - составное число`;
//     } else if (number> 1000) {
//         result = 'Данные неверны';
//     }
//     else {
//         result = 'Число должно быть больше 1'
//     }
//     console.log(result)
// }
// getNumbers()
//example № 3
// function acceptNumber(a){
//     return function (b){
//         return a+b
//     }
// }
//
// let sumFunction = acceptNumber(2)
// let sum = sumFunction(5)
// console.log(sum)

//example № 4
// function logNumbers(begin, end) {
//     let current = begin;
//
//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == end) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

// logNumbers(5, 15);
//example № 5

const multiplication = function (x, n){
    return x ** n;
}

console.log(multiplication(2, 8));