// Function to calculate BMI
function calculateBMI(weight, height) {
    // Check if height is zero to avoid division by zero
    if (height === 0) {
      console.log("Invalid input, height cannot be zero.");
      return;
    }
  
    // Check if either weight or height is negative
    if (weight < 0 || height < 0) {
      console.log("Invalid input, height and weight must be positive numbers.");
      return;
    }
  
    // BMI formula: BMI = weight / (height * height)
    const bmi = weight / (height * height);
  
    // Round the result to 2 decimal places
    const roundedBMI = bmi.toFixed(2);
  
    // Print the result
    console.log("Your BMI is: " + roundedBMI + ".");
  }
  
  // Test Case 1
  calculateBMI(70, 1.75);
  
  // Test Case 2
  calculateBMI(55, 1.60);
  
  // Edge Case 1: negative input
  calculateBMI(-65, 1.7);
  