//Intersection of Two Arrays**

function intersection(nums1, nums2) {
    const set = new Set(nums1);
    const intersection = [];
  
    for (const num of nums2) {
      if (set.has(num)) {
        intersection.push(num);
        set.delete(num);
      }
    }
  
    return intersection;
  }
//You can test the implementation using the provided examples:
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]
