function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const element = array[j];
      if (array[i] + array[j] === target) {
        return true
      }
    }
  } return false
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  I will need to go through the entire array and check if any 2 numbers
  equal the target
*/

/*
  Add written explanation of your solution here
  I wrote one loop which logs i and a nested loop which logs j (which is i + 1)
  if both array[j] ever === array[i] then i return true otherwise i return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
