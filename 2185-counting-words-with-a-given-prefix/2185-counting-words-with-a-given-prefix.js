/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let counter = 0;
    let len = pref.length;
    words.forEach((x) => {
        x = x.slice(0, len);
        if (x == pref) counter++;
    } 
    );
    return counter;
};