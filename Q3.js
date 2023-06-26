//Given an array of integers `nums`, sort the array in ascending order and return it.
function sortArray(nums) {
    function partition(nums, start, end) {
      const pivot = nums[end];
      let pivotIndex = start;
  
      for (let i = start; i < end; i++) {
        if (nums[i] < pivot) {
          [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
          pivotIndex++;
        }
      }
  
      [nums[pivotIndex], nums[end]] = [nums[end], nums[pivotIndex]];
      return pivotIndex;
    }
  
    function quicksort(nums, start, end) {
      if (start < end) {
        const pivotIndex = partition(nums, start, end);
        quicksort(nums, start, pivotIndex - 1);
        quicksort(nums, pivotIndex + 1, end);
      }
    }
  
    quicksort(nums, 0, nums.length - 1);
    return nums;
  }
//You can test the implementation using the provided examples:

console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]


