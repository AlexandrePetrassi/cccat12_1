import {DEFAULT_FARE_SET, FareSet} from "./FareSet";
import {LazyGetter} from "lazy-get-decorator";

export default class Segment {

	constructor (readonly distance: number, readonly date: Date, readonly fareSet: FareSet = DEFAULT_FARE_SET) {
		if (!isValidDistance(distance)) throw new Error("Invalid distance");
		if (!isValidDate(date)) throw new Error("Invalid date");
	}

	isOvernight () {
		return this.date.getHours() >= 22 || this.date.getHours() <= 6;
	}
	
	isSunday () {
		return this.date.getDay() === 0;
	}

	@LazyGetter()
	get value(): number {
		return segmentValue(this.fareSet, this)
	}
}

function segmentValue(fareSet: FareSet, segment: Segment) {
	return fareSet.strategies.find(fare => fare.condition(segment))?.value ?? fareSet.defaultValue;
}

function isValidDistance (distance: number) {
	return distance > 0;
}

function isValidDate (date: Date) {
	return date.toString() !== "Invalid Date";
}