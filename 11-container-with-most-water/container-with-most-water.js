/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    let capacity = 0;
    let max_capacity = 0;
    let min_ht = 0;
    let i = 0;
    let j = n-1;
    while(i<j){
        
        min_ht = Math.min(height[i],height[j]);
        capacity = min_ht * (j-i);
        if(height[i]<height[j]){
            max_capacity = Math.max(max_capacity, capacity)
            i++;
        }
        else{
            max_capacity = Math.max(max_capacity, capacity)
            j--;
        }
    }
    return max_capacity;
};