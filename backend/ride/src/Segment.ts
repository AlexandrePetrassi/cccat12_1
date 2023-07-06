export default class Segment {

	constructor (readonly distance: number, readonly date: Date) {
		if (!isValidDistance(distance)) throw new Error("Invalid distance");
		if (!isValidDate(date)) throw new Error("Invalid date");
	}

	isOvernight () {
		return this.date.getHours() >= 22 || this.date.getHours() <= 6;
	}
	
	isSunday () {
		return this.date.getDay() === 0;
	}
}

function isValidDistance (distance: number) {
	return distance > 0;
}

function isValidDate (date: Date) {
	return date.toString() !== "Invalid Date";
}
