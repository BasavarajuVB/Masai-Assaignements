// Instructions:

// Please read questions carefully.

// Please upload file in google drive and then upload link.

// You can upload notepad or vscode file, both are fine.

// Title: Pine Tree Pattern

// Level: Level 1 - Easy

// Time to Solve the Problem: 10 Mins

// Problem Description Write a program to print a pine tree pattern using asterisks *, with the trunk at the bottom centered relative to the tree.

// Input Format:

// A single integer N, which represents the height of the pine tree (excluding the trunk). Constraints:

// 3 <= N <= 10 (though the tree can be any size, for the sake of example)

// Output Format:

// Print the pine tree pattern according to the given height N.

// Sample Input: 5

// Sample Output:
let n = 9 

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
