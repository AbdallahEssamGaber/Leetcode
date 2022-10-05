/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    while (true) {
        let value = i*i;
        if (value == x) return i
        else if (value > x) return i-1
        i++;
    }
};