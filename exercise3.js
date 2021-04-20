function exponent (basis, n) {
    result = basis**n;
    return result;
}

console.log(exponent(2,3));
// accessing the variable 'result' is not possible
// because it is declared within the code block of the function 'exponent'.
// It can only be accessed within the function's code block scope.

