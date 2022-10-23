/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m && !n) return nums1;
    else if (!m && n) {
        if (n <= 1) nums1[0] = nums2[0];
        else nums1.splice(0, nums1.length, ...nums2);
        return;
    }
    else if (m !== nums1.length) nums1.splice(m, nums1.length-m)
    else if (n !== nums2.length) nums2.splice(n, nums1.length-n)
    nums1.push(...nums2)
    nums1.sort((a,b) => a-b);
};