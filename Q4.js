//Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

function moveZeroesToEnd(arr) {
    let nonZeroPointer = 0;
  
    for (let currPointer = 0; currPointer < arr.length; currPointer++) {
      if (arr[currPointer] !== 0) {
        [arr[nonZeroPointer], arr[currPointer]] = [arr[currPointer], arr[nonZeroPointer]];
        nonZeroPointer++;
      }
    }
  
    for (let i = nonZeroPointer; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
//You can test the implementation using the provided examples:

console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveZeroesToEnd([1, 2, 0, 0, 0, 3, 6])); // Output: [1, 2, 3, 6, 0, 0, 0]
