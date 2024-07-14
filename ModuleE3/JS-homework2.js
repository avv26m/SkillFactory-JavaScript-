function getNumbers(number) {
    let values = true;
    let result;

    if (number > 1 && number <= 1000) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                values = false;
            }
        }
        result = values ? `Число ${number} - простое число` : `Число ${number} - составное число`;
    } else if (number> 1000) {
        result = 'Данные неверны';
    }
    else {
        result = 'Число должно быть больше 1'
    }
    console.log(result)
}
getNumbers()