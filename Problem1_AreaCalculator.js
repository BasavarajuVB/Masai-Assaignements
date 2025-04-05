// Function to calculate area of a triangle
function calculateTriangleArea(base, height) {
    // Check if base or height is negative
    if (base < 0 || height < 0) {
      console.log("Invalid number, base and height must be positive numbers.");
      return;
    }
    // Calculate area using formula
    let area = (base * height) / 2;
    // Print formatted result
    console.log("The area of the triangle is: " + area);
  }
  // Test Case 1
  calculateTriangleArea(10, 5); 
  
  // Test Case 2
  calculateTriangleArea(0, 15);
  
  // Edge Case: Negative values
  calculateTriangleArea(-4, 6); // Expected: Invalid number message
  calculateTriangleArea(6, -4); // Expected: Invalid number message
  