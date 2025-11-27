/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    const n1 = nums1.length;
    const n2 = nums2.length;
    let i = 0;
    let j = 0;
    while(i<n1 && j<n2){
        if(nums1[i] < nums2[j]){
            i++;
            while(nums1[i] === nums1[i-1]) i++
        }
        else if(nums2[j] < nums1[i]){
            j++;
            while(nums2[j] === nums2[j-1]) j++
        }
        else{
            res.push(nums1[i]);
            i++;
            j++;
            while(nums1[i] === nums1[i-1]) i++
            while(nums2[j] === nums2[j-1]) j++
        }
    }
    return res;
};