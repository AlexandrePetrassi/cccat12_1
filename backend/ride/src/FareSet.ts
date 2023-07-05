import {Fare} from "./Fare";

export class FareSet {
    constructor(
        readonly strategies: Fare[] = [],
        readonly defaultValue = 1
    ) {}
}

export const DEFAULT_FARE_SET = new FareSet(
    [
        new Fare(it => it.isOvernight() && it.isSunday(), 5),
        new Fare(it => it.isOvernight() && !it.isSunday(), 3.90),
        new Fare(it => !it.isOvernight() && it.isSunday(), 2.9),
    ],
    2.1
)
