import Segment from "./Segment";
import {DEFAULT_FARE, Fare} from "./Fare";

export default class Ride {
	constructor (
		readonly segments: Segment[] = [],
		readonly fare: Fare = DEFAULT_FARE,
		readonly minimumPrice: number = 10
	) {}

	addSegment (distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculate () {
		const price = this.segments
			.map(it => this.fare.getValue(it) * it.distance)
			.reduce((a, b) => a + b, 0)
		return (price < this.minimumPrice) ? this.minimumPrice : price;
	}
}