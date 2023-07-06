import Segment from "./Segment";
import {DEFAULT_FARE_SET, FareSet} from "./FareSet";

function calculateRideTotalPrice(segments: Segment[], fareSet: FareSet, minimumPrice: number) {
	const price =  segments
		.map(segment => fareSet.fairOf(segment) * segment.distance)
		.reduce((a, b) => a + b, 0)
	return Math.max(minimumPrice, price);
}

export default class Ride {
	constructor (
		readonly segments: Segment[] = [],
		readonly fareSet: FareSet = DEFAULT_FARE_SET,
		readonly minimumPrice: number = 10
	) {}

	addSegment (distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculate (): number {
		return calculateRideTotalPrice(this.segments, this.fareSet, this.minimumPrice)
	}
}