//**Merge two sorted arrays**
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
//You can test the implementation using the provided examples:

console.log(mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])); // Output: [1, 2, 3, 4, 4, 5, 6, 8]
console.log(mergeSortedArrays([5, 8, 9], [4, 7, 8])); // Output: [4, 5, 7, 8, 8, 9]

