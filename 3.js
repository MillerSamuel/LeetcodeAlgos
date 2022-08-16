/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map=new Map();
    let startpos=0;
    let max=0;
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            startpos=Math.max(map.get(s[i])+1,startpos);
        }
        map.set(s[i],i);
        max=Math.max(i - startpos + 1,max);
    }
    return max
};