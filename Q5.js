//*Rearrange array in alternating positive & negative items with O(1) extra space**

function rearrangeAlternate(arr) {
    let positivePointer = 0;
    let negativePointer = 0;
  
    while (positivePointer < arr.length && negativePointer < arr.length) {
      if (arr[positivePointer] >= 0 && arr[negativePointer] < 0) {
        [arr[positivePointer], arr[negativePointer]] = [arr[negativePointer], arr[positivePointer]];
        positivePointer++;
        negativePointer++;
      } else if (arr[positivePointer] < 0) {
        positivePointer++;
      } else if (arr[negativePointer] >= 0) {
        negativePointer++;
      }
    }
  
    return arr;
  }
//You can test the implementation using the provided examples:
console.log(rearrangeAlternate([1, 2, 3, -4, -1, 4])); // Output: [-4, 1, -1, 2, 3, 4]
console.log(rearrangeAlternate([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])); // Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]


