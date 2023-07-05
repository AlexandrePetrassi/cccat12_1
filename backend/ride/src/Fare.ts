import Segment from "./Segment";

export class Fare {
    constructor(
        readonly condition: (segment: Segment) => boolean,
        readonly value: number
    ) {}
}