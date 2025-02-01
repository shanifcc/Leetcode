/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    if (nums.length === 1) {
        return nums[0];
    }

    let maxProduct = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
};