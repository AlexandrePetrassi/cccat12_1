// @ts-nocheck
import express from "express";
import Ride from "./Ride";
const app = express();

app.use(express.json());

app.post("/calculate_ride", (request, response) => {
	try {
		const ride = new Ride();
		for (const segment of request.body.segments) {
			ride.addSegment(segment.distance, new Date(segment.date));
		}
		const price = ride.calculate();
		response.json({ price });
	} catch (e) {
		response.status(422).send(e.message);
	}
});

app.listen(3000);
