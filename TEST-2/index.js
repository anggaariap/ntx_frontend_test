// Create a function named calculateShippingCost that takes three parameters:
// 1. destination (string): the shipping destination, which can be "domestic" or
// "international".
// 2. weight (number): the weight of the package in kilograms (kg).
// 3. priority (string): the shipping priority, which can be "standard", "express", or
// "priority".
// The function should calculate the shipping cost based on the following rules:
// 1. If destination is not "domestic" or "international", return "Invalid destination".
// 2. If weight is less than or equal to 0, return "Invalid weight".
// 3. Rules to determine the shipping cost based on destination:
// For "domestic" destination:
// a) If priority is "standard", the base cost is $5 per kg.
// b) If priority is "express", the base cost is $10 per kg.
// c) If priority is "priority", the base cost is $20 per kg.
// d) If weight is more than 10 kg, add an additional cost of $10.
// For "international" destination:
// a) If priority is "standard", the base cost is $15 per kg.
// b) If priority is "express", the base cost is $25 per kg.
// c) If priority is "priority", the base cost is $50 per kg.
// d) If weight is more than 5 kg, add an additional cost of $50.
// 6. If priority is not one of "standard", "express", or "priority", return "Invalid priority".

function calculateShippingCost(destination, weight, priority) {
    // Destination validation
    if (typeof destination != "string" | destination !== "domestic" && destination !=="international") {
        return "Invalid destination";
    }

    // Weight validation
    if (typeof weight != "number" | weight <= 0) {
        return "Invalid weight";
    }

    // Priority validation
    if (typeof priority != "string" | priority !== "standard" && priority !== "express" && priority !== "priority") {
        return "Invalid priority";
    }

    // Base cost initialization
    let baseCost = 0;

    // Calculate base cost on domestic destination and priority
    if (destination == "domestic") {
        switch (priority) {
            case "standard":
                baseCost = 5 * weight;
                break;
            case "express":
                baseCost = 10 * weight;
                break;
            case "priority":
                baseCost = 20 * weight;
                break; 
        }
        // Add additional cost if weight more than 10 kg
        if (weight > 10) {
            baseCost += 10;
        }
    // Calculate base cost on international destination and priority
    } else if (destination == "international") {
        switch (priority) {
            case "standard":
                baseCost = 15 * weight;
                break;
            case "express":
                baseCost = 25 * weight;
                break;
            case "priority":
                baseCost = 50 * weight;
                break;
        }
        // Add additional cost if weight more than 5 kg
        if (weight > 5) {
            baseCost += 50;
        }
    }

    return baseCost;
}

// Example
console.log(calculateShippingCost("domestic", 11, "standard"));
console.log(calculateShippingCost("international", 6, "express"));
console.log(calculateShippingCost("domestic", -2, "priority"));