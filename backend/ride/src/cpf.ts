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

function calculateD1(d1: number): number {
    const rest = (d1 % 11);
    return (rest < 2) ? 0 : 11 - rest;
}

function calculateD2(d2: number, dg1: number): number {
    const rest2 = ((d2 + 2 * dg1) % 11);
    return rest2 < 2 ? 0 : 11 - rest2;
}

function compareDigitsWithCpf(dg1: number, dg2: number, cpf: string) {
    return cpf.slice(-2) == '' + dg1 + dg2;
}

function isValidCpf(cpf: string): boolean {
    try {
        let d1 = 0;
        let d2 = 0;

        for (let nCount = 0; nCount < cpf.length - 2; nCount++) {
            const digito = parseInt(cpf.substring(nCount, nCount + 1));
            d1 = d1 + (10 - nCount) * digito;
            d2 = d2 + (11 - nCount) * digito;
        }

        const dg1 = calculateD1(d1);
        const dg2 = calculateD2(d2, dg1);
        return compareDigitsWithCpf(dg1, dg2, cpf);

    } catch (e) {
        console.error("Erro !" + e);

        return false;
    }
}

export function validate (str: string) {
    const cpf = filterOnlyNumbers(str)
    if (cpf.length !== 11) return false

    if (isEveryCharTheSame(cpf)) return false;

    return isValidCpf(cpf)
}