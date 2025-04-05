// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Check for invalid (negative) input values
    if (principal < 0 || rate < 0 || time < 0) {
      console.log("Invalid input, all values must be non-negative.");
      return;
    }
  
    // Calculate simple interest using the formula: (P × R × T) / 100
    const interest = (principal * rate * time) / 100;
  
    // Print the result
    console.log("The simple interest is: " + interest);
  }
  
  // Test Case 1
  calculateSimpleInterest(1000, 5, 3);
  
  // Test Case 2
  calculateSimpleInterest(1500, 7, 5);
  
  // Test Case 3
  calculateSimpleInterest(0, 0, 0);
  
  // Edge Case 1: Negative input
  calculateSimpleInterest(-1000, 5, 2);
  