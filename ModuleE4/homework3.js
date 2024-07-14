// Написать функцию, которая создает пустой объект, но без прототипа.
function crateObject() {
    const student = Object.create();
    return student
}
console.log(crateObject());