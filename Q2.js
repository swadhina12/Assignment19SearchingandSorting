//*Count of Smaller Numbers After Self**
function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
  
    function mergeAndCount(left, right) {
      const merged = [];
      let count = 0;
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          counts[left[i][1]] += count;
          i++;
        } else {
          merged.push(right[j]);
          j++;
          count++;
        }
      }
  
      while (i < left.length) {
        merged.push(left[i]);
        counts[left[i][1]] += count;
        i++;
      }
  
      while (j < right.length) {
        merged.push(right[j]);
        j++;
        count++;
      }
  
      return merged;
    }
  
    function mergeSort(nums, start, end) {
      if (start >= end) {
        return [nums[start]];
      }
  
      const mid = Math.floor((start + end) / 2);
      const leftSorted = mergeSort(nums, start, mid);
      const rightSorted = mergeSort(nums, mid + 1, end);
      return mergeAndCount(leftSorted, rightSorted);
    }
  
    mergeSort(nums.map((num, index) => [num, index]), 0, nums.length - 1);
  
    return counts;
  }
//You can test the implementation using the provided examples:
console.log(countSmaller([5, 2, 6, 1])); // Output: [2, 1, 1, 0]
console.log(countSmaller([-1])); // Output: [0]
console.log(countSmaller([-1, -1])); // Output: [0, 0]

