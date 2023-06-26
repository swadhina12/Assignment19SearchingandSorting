//Intersection of Two Arrays II**

function intersect(nums1, nums2) {
    const map = new Map();
    const intersection = [];
  
    for (const num of nums1) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  
    for (const num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        intersection.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  
    return intersection;
  }
//You can test the implementation using the provided examples:
console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
