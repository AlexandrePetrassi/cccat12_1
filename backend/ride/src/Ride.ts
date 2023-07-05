import Segment from "./Segment";
import {DEFAULT_FARE, FareSet} from "./FareSet";

export default class Ride {
	constructor (
		readonly segments: Segment[] = [],
		readonly fare: FareSet = DEFAULT_FARE,
		readonly minimumPrice: number = 10
	) {}

	addSegment (distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	ofSegment(segment: Segment): number {
		for (const [condition, value] of this.fare.strategies) {
			if (condition(segment)) return value * segment.distance
		}
		return this.fare.defaultValue * segment.distance
	}

	plus(a: number, b: number) {
		return a + b
	}

	calculate () {
		const price = this.segments
			.map(this.ofSegment)
			.reduce(this.plus, 0)
		return (price < this.minimumPrice) ? this.minimumPrice : price;
	}
}