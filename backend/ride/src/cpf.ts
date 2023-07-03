// @ts-nocheck
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

function isValidCpf(cpf: string): boolean {
    try {
        let d1, d2;
        let dg1, dg2, rest;
        let digito;
        d1 = d2 = 0;
        dg1 = dg2 = rest = 0;

        for (let nCount = 0; nCount < cpf.length - 2; nCount++) {
            digito = parseInt(cpf.substring(nCount, nCount + 1));
            d1 = d1 + (10 - nCount) * digito;
            d2 = d2 + (11 - nCount) * digito;
        }

        rest = (d1 % 11);

        dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
        d2 += 2 * dg1;
        rest = (d2 % 11);
        dg2 = rest < 2 ? 0 : 11 - rest;

        let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
        const nDigResult = "" + dg1 + "" + dg2;
        return nDigVerific == nDigResult;
    } catch (e) {
        console.error("Erro !" + e);

        return false;
    }
}

export function validate (str) {
    if (!str) return false
    const cpf = filterOnlyNumbers(str)
    if (cpf.length !== 11) return false

    if (isEveryCharTheSame(cpf)) return false;

    return isValidCpf(cpf)
}