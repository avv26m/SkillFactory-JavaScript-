const user = {
    name: 'Viktor',
    age: 20,
    company: 'VK',
}

function getValues(obj){
    for (let key in obj){
        console.log(key + '=' + obj[key]);
    }
}

getValues(user)