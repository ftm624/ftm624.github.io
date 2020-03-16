function isEven(x) {
    return x % 2 === 0;
}

function factorial(x) {
    let f = 1
    for (let i = Number(x); i > 0; i--) {
        f *= i;
    }
    return f
}

function kebabToSnake(s) {
    return s.replace(/-/g, '_')

}