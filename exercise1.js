function exponentialNumbers(number1, number2) {
    if (typeof number1 !== 'number') return null;
    if (typeof number2 !== 'number') return null;
    for (let i = 1; i <= number2; i++) {
        console.log(number1**i);
    }
}

exponentialNumbers(3,5);

