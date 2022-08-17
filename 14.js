/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for(let i=0;i<strs[0].length;i++){
        let tempcheck=strs[0][i];
        for(let j=0;j<strs.length;j++){
            if(strs[j][i]!=tempcheck||strs[j].length==i){
                return strs[0].substring(0,i);
            } 
        }
    }
    return strs[0]
};