/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = nums1.concat(nums2).sort((a,b) => a - b);
	if (array.length % 2 === 0) return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2
	return array[Math.floor(array.length/2)]
};