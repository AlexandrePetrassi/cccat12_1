import Segment from "./Segment";
import {DEFAULT_FARE, FareSet} from "./FareSet";

function calculateRideTotalPrice(segments: Segment[], fareSet: FareSet, minimumPrice: number) {
	let price = 0
	for (const segment of segments) {
		let value =  fareSet.defaultValue
		for (const fare of fareSet.strategies) {
			if (fare.condition(segment)) {
				value = fare.value
			}
		}
		price += value * segment.distance
	}
	return (price < minimumPrice) ? minimumPrice : price;
}

export default class Ride {
	constructor (
		readonly segments: Segment[] = [],
		readonly fareSet: FareSet = DEFAULT_FARE,
		readonly minimumPrice: number = 10
	) {}

	addSegment (distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculate (): number {
		return calculateRideTotalPrice(this.segments, this.fareSet, this.minimumPrice)
	}
}