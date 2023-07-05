import Segment from "./Segment";

export class FareSet {
    constructor(
        readonly strategies: [condition: (segment: Segment) => boolean, value: number][] = [],
        readonly defaultValue = 1
    ) {}
}

export const DEFAULT_FARE = new FareSet(
    [
        [it => it.isOvernight() && it.isSunday(), 5],
        [it => it.isOvernight() && !it.isSunday(), 3.90],
        [it => !it.isOvernight() && it.isSunday(), 2.9],
    ],
    2.1
)
