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

export function validate (str) {
    if (!str) return false
    str = filterOnlyNumbers(str)
    if (str.length !== 11) return false

    if (isEveryCharTheSame(str)) return false;

    try {
        let d1, d2;
        let dg1, dg2, rest;
        let digito;
        let nDigResult;
        d1 = d2 = 0;
        dg1 = dg2 = rest = 0;

        for (let nCount = 0; nCount < str.length - 2; nCount++) {
            digito = parseInt(str.substring(nCount, nCount + 1));
            d1 = d1 + (10 - nCount) * digito;
            d2 = d2 + (11 - nCount) * digito;
        }

        rest = (d1 % 11);

        dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
        d2 += 2 * dg1;
        rest = (d2 % 11);
        if (rest < 2)
            dg2 = 0;
        else
            dg2 = 11 - rest;

        let nDigVerific = str.substring(str.length - 2, str.length);
        nDigResult = "" + dg1 + "" + dg2;
        return nDigVerific == nDigResult;
    } catch (e) {
        console.error("Erro !" + e);

        return false;
    }
}