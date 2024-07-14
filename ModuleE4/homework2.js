// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли
// у переданного объекта
// свойство с данным именем. Функция должна возвращать true или false.
function getObjectName(obj, objName){
    if (obj.hasOwnProperty(objName)){
        return true;
    } else {
        return false;
    }
};

const user = {
    name: 'Viktor',
    age: 20,
    company: 'VK',
};

console.log(getObjectName(user, 'name'))

