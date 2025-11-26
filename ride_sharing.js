class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance provided");
        }

        const rate = 12;
        return this.distance * rate;
    }
}

try {
    const user = new User("Anurag", 4.8);
    const driver = new Driver("Saksham", 4.9, "Swift Dzire");

    const trip = new Trip("Delhi", "Noida", 15);
    console.log("Fare:", trip.calculateFare());
} 
catch (error) {
    console.log("Error:", error.message);
}

try {
    const badTrip = new Trip("Delhi", "Gurgaon", -5);
    console.log("Fare:", badTrip.calculateFare());
} 
catch (error) {
    console.log("Error:", error.message);
}
