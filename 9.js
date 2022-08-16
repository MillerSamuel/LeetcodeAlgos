/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    xstring=String(x);
    for(let i=0;i<xstring.length;i++){
        if(xstring[i]!=xstring[xstring.length-1-i]){
            return false;
        }
    }
    return true;
};