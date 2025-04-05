// Function to compare two numbers
function compareNumbers(number1, number2) {
    // Check if both numbers are equal
    if (number1 === number2) {
      console.log("Both numbers are equal");
    } 
    // Check if number1 is greater
    else if (number1 > number2) {
      console.log(number1 + " is larger than " + number2);
    } 
    // Else number2 is greater
    else {
      console.log(number2 + " is larger than " + number1);
    }
  }
  
  // Test Case 1
  compareNumbers(5, 10); 
  // Test Case 2
  compareNumbers(7, 7); 
 
  // Edge Case 2: Negative values
  compareNumbers(-20, -5); 