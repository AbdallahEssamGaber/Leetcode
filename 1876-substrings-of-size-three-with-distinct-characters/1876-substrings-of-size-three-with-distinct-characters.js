/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let counter = 0;
    for (let i = 0, j=3; i < s.length-2; i++, j++) {
        if(!repeated(s.slice(i, j))) counter++;
    }
    function repeated(str) {
        for (let i = 0; i < str.length; i++) {
            for (let j = i+1; j < str.length; j++) {
                if (str[i] == str[j]) return true;
            }
        }
    }
    return counter;
};