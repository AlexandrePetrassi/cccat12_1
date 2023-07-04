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

function compareDigitsWithCpf(dg1: number, dg2: number, cpf: string) {
    return cpf.slice(-2) == '' + dg1 + dg2;
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
    const d1 = calculateDigit(digits, 10);
    const d2 = calculateDigit(digits, 11, d1);
    return compareDigitsWithCpf(d1, d2, cpf);
}

export function validate (str: string) {
    return isValidCpf(filterOnlyNumbers(str))
}