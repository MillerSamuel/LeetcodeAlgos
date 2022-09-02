/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1, 1]
    let ans = [1, 1];
    let row = [];
    for (let i = 2; i <= rowIndex; i++) {
        row = [1];
        for (let j = 1; j < ans.length; j++) {
            row.push(ans[j - 1] + ans[j])
        }
        row.push(1);
        ans = row;
    }
    return ans;
};