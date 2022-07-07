var searchInsert = function(nums, target) {
    let mid = Math.floor(nums.length/2);
    if(target === nums[mid]) {
        return mid
    } 
    else if (target < nums[mid]) {
        for (let i=0; i<=mid; i++) {
            if (target <= nums[i]) {
                return i
            }
            if ( i=== mid-1) {
                return i+1;
            }
        }
    }
    else {
        for (let k=mid; k<nums.length ; k++) {
            if (target <= nums[k]) {
                return k
            }
            if( k === nums.length-1) {
                return k+1
            }
        }
    }
};