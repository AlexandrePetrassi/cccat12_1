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

function calculateFirstDigit(digits: number[]) {
    let d1 = 0;

    digits.forEach((digito, nCount) => {
        d1 = d1 + (10 - nCount) * digito;
    })

    const rest = (d1 % 11);
    return (rest < 2) ? 0 : 11 - rest;
}

function calculateSecondDigit(digits: number[], d1: number) {
    let d2 = 0;

    digits.forEach((digito, nCount) => {
        d2 = d2 + (11 - nCount) * digito;
    })

    const rest2 = ((d2 + 2 * d1) % 11);
    return rest2 < 2 ? 0 : 11 - rest2;
}

function isValidCpf(cpf: string): boolean {
    if (!isLengthValid(cpf) || isEveryCharTheSame(cpf)) return false
    const digits = cpf.split("").slice(0, -2).map(it => parseInt(it))
    const d1 = calculateFirstDigit(digits);
    const d2 = calculateSecondDigit(digits, d1);
    return compareDigitsWithCpf(d1, d2, cpf);
}

export function validate (str: string) {
    return isValidCpf(filterOnlyNumbers(str))
}