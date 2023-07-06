import {Fare} from "./Fare";
import Segment from "./Segment";

export class FareSet {
    constructor(
        readonly strategies: Fare[] = [],
        readonly defaultValue = 1
    ) {}

    fairOf(segment: Segment): number {
        return this.strategies.find(fare => fare.condition(segment))?.value ?? this.defaultValue;
    }
}

export const DEFAULT_FARE_SET = new FareSet(
    [
        new Fare(it => it.isOvernight() && it.isSunday(), 5),
        new Fare(it => it.isOvernight() && !it.isSunday(), 3.90),
        new Fare(it => !it.isOvernight() && it.isSunday(), 2.9),
    ],
    2.1
)
