// Function to calculate final price after applying discount
function calculateFinalPrice(price) {
    // Check for negative price
    if (price < 0) {
      console.log("Invalid price, the price must be a non-negative number.");
      return;
    }
  
    // If price is more than $20, apply 10% discount
    if (price > 20) {
      price = price - (price * 0.10); // or price *= 0.9;
    }
    // Print the final price
    console.log("The final price of the item is: " + price);
  }
  // Test Case 1: price > $20
  calculateFinalPrice(25); 
  // Test Case 2: price = $20
  calculateFinalPrice(20); 
  
  // Edge Case: price is negative
  calculateFinalPrice(-5); // Expected: Invalid price message
  