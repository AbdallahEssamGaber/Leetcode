/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringArray = s.split(/\s+/);
    return stringArray[stringArray.length-1] !== "" ? stringArray[stringArray.length-1].length : stringArray[stringArray.length-2].length;
};