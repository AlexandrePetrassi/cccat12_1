import {LazyGetter} from 'lazy-get-decorator';

function calculateDigit(digits: number[], factor: number, previousDigit: number = 0) {
    const digit = digits.reduce((prev: number, next: number, index: number) => prev + (factor - index) * next, 0)
    const rest = ((digit + 2 * previousDigit) % 11);
    return rest < 2 ? 0 : 11 - rest;
}

function verifyDigits(digits: number[]): boolean {
    const verifiableDigits = digits.slice(0, -2)
    const givenVerifierDigits = digits.slice(-2);
    const firstDigit = calculateDigit(verifiableDigits, 10);
    const secondDigit = calculateDigit(verifiableDigits, 11, firstDigit);
    const calculatedVerifierDigits = [firstDigit, secondDigit]
    return givenVerifierDigits.toString() === calculatedVerifierDigits.toString()
}

export function validate (str: string) {
    return new Cpf(str).isValid
}

export class Cpf {

    constructor(private readonly raw: string) {}

    @LazyGetter()
    get digits(): number[] {
        return this.raw.replace(/\D+/g, '').split("").map(it => parseInt(it));
    }

    @LazyGetter()
    get isLengthValid() {
        return this.digits.length === 11;
    }

    @LazyGetter()
    get isEveryCharTheSame(): boolean {
        const [firstDigit] = this.digits
        return this.digits.every(digit => digit === firstDigit);
    }

    @LazyGetter()
    get areVerifierDigitsValid(): boolean {
        return verifyDigits(this.digits)
    }

    @LazyGetter()
    get isValid() {
        return this.isLengthValid && !this.isEveryCharTheSame && this.areVerifierDigitsValid
    }
}