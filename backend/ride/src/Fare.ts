import Segment from "./Segment";

export class Fare {
    constructor(
        readonly strategies: [condition: (segment: Segment) => boolean, value: number][] = [],
        readonly defaultValue = 1
    ) {}

    getValue(segment: Segment): number {
        for (const [condition, value] of this.strategies) {
            if (condition(segment)) return value
        }
        return this.defaultValue
    }
}

export const DEFAULT_FARE = new Fare(
    [
        [it => it.isOvernight() && it.isSunday(), 5],
        [it => it.isOvernight() && !it.isSunday(), 3.90],
        [it => !it.isOvernight() && it.isSunday(), 2.9],
    ],
    2.1
)
