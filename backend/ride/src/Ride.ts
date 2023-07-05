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
		return this.fare.getTotal(this.segments, this.minimumPrice)
	}
}