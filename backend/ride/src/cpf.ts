import {LazyGetter} from 'lazy-get-decorator';

function reduceByFactorOf(factor: number) {
    return (prev: number, next: number, index: number) => prev + (factor - index) * next
}

function calculateDigit(digits: number[], factor: number, previousDigit: number = 0) {
    const digit = digits.reduce(reduceByFactorOf(factor), 0)
    const rest = ((digit + 2 * previousDigit) % 11);
    return rest < 2 ? 0 : 11 - rest;
}

export function validate (str: string) {
    return new Cpf(str).isValid
}

export class Cpf {
    private readonly raw: string;

    constructor(rawCpf: string) {
        this.raw = rawCpf
    }

    @LazyGetter()
    private get digits(): number[] {
        return this.raw.replace(/\D+/g, '').split("").map(it => parseInt(it));
    }

    @LazyGetter()
    private get verifiableDigits(): number[] {
        return this.digits.slice(0, -2)
    }

    @LazyGetter()
    private get givenVerifierDigits(): number[] {
        return this.digits.slice(-2);
    }

    @LazyGetter()
    private get firstDigit(): number {
        return calculateDigit(this.verifiableDigits, 10);
    }

    @LazyGetter()
    private get secondDigit(): number {
        return calculateDigit(this.verifiableDigits, 11, this.firstDigit);
    }

    @LazyGetter()
    private get calculatedVerifierDigits(): number[] {
        return [this.firstDigit, this.secondDigit]
    }

    @LazyGetter()
    get isLengthValid() {
        return this.digits.length === 11;
    }

    @LazyGetter()
    get isEveryCharTheSame(): boolean {
        return this.digits.every(c => c === this.digits[0]);
    }

    @LazyGetter()
    get areVerifierDigitsValid(): boolean {
        return this.givenVerifierDigits.toString() === this.calculatedVerifierDigits.toString()
    }

    @LazyGetter()
    get isValid() {
        return this.isLengthValid && !this.isEveryCharTheSame && this.areVerifierDigitsValid
    }
}