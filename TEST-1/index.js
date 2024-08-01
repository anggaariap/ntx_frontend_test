// Create a function named calculateTax that takes three parameters:
// 1. income (number): the annual income of an individual in USD.
// 2. age (number): the age of the individual.
// 3. dependents (number): the number of dependents the individual has.
// The function should calculate the annual tax that the individual needs to pay based on the
// following rules:
// 1. If income is less than 0 or not a number, return "Invalid income".
// 2. If age is less than 0 or not a number, return "Invalid age".
// 3. If dependents is less than 0 or not a number, return "Invalid dependents".
// 4. Rules:
// a) If the age is less than 18, return "Not eligible for tax".
// b) If the age is 65 or older, the individual gets a 20% tax discount.
// c) If the income is less than or equal to $10,000, the tax is 10% of the income.
// d) If the income is between $10,001 and $50,000, the tax is 20% of the income.
// e) If the income is more than $50,000, the tax is 30% of the income.
// f) For each dependent, the individual gets a $500 tax deduction.
// g) The minimum tax is $0 (no negative tax).
// Use a recursive function and explain your code.

function calculateTax(income, age, dependents) {
  // Income validation
  if (typeof income!= "number" | income <  0) {
    return "Invalid income";
  }

  // Age validation
  if (typeof age!= "number" | age <  0) {
    return "Invalid age";
  }

  // dependents validation
  if (typeof dependents!= "number" | dependents <  0) {
    return "Invalid dependents";
  }

  // Check eligibility for age under 18
  if (age < 18) {
    return "Not eligible for tax";
  }

  // Recursive function to calculate tax based on income
  function calculateBaseTax(income) {
    if (income <=10000) {
      return income * 0.1; // 10% tax
    } else if (income <=5000) {
      return income * 0.2; // 20% tax
    } else {
      return income * 0.3; // 30% tax
    }
  }

  // Calculate base tax
  let baseTax = calculateBaseTax(income);

  // Age discount if age is 65 or older
  if (age >= 65) {
    baseTax *= 0.8; // 20% discount
  }

  // Calculate deduction for dependents
  function calculateDependentDeduction(dependents) {
    if (dependents === 0) {
      return 0;
    }
    return 500 + calculateDependentDeduction(dependents - 1);
  }

  let dependendDeduction = calculateDependentDeduction(dependents);

  // Calculate tax total after deductions
  let taxTotal = baseTax - dependendDeduction;

  // Minimum tax is $0
  if (taxTotal < 0) {
    taxTotal = 0;
  }

  return taxTotal;
}

// Example
console.log(calculateTax(11000, 35, 3));
console.log(calculateTax(6000, 70, 2));
console.log(calculateTax(6000, 50, -1));