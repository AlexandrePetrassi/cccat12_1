function isEveryCharTheSame(str: string): boolean {
    return str.split("").every(c => c === str[0]);
}

function filterOnlyNumbers(str: string): string {
    return str
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace(" ", "");
}

function compareDigitsWithCpf(firstDigit: number, secondDigit: number, cpf: string) {
    return cpf.slice(-2) == '' + firstDigit + secondDigit;
}

function isLengthValid(cpf: string) {
    return cpf.length === 11;
}

function reduceByFactorOf(factor: number) {
    return (prev: number, next: number, index: number) => prev + (factor - index) * next
}

function calculateDigit(digits: number[], factor: number, previousDigit: number = 0) {
    const digit = digits.reduce(reduceByFactorOf(factor), 0)
    const rest = ((digit + 2 * previousDigit) % 11);
    return rest < 2 ? 0 : 11 - rest;
}

function isValidCpf(cpf: string): boolean {
    if (!isLengthValid(cpf) || isEveryCharTheSame(cpf)) return false
    const digits = cpf.split("").slice(0, -2).map(it => parseInt(it))
    const firstDigit = calculateDigit(digits, 10);
    const secondDigit = calculateDigit(digits, 11, firstDigit);
    return compareDigitsWithCpf(firstDigit, secondDigit, cpf);
}

export function validate (str: string) {
    return isValidCpf(filterOnlyNumbers(str))
}