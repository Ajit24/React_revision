// Given the root of a binary tree, return the length of the diameter of the tree.

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  var diameterOfBinaryTree = function(root) {
//     let res = 0;
//     function depth(node){
//         if(node === null){
//             return 0;
//         }
//         let leftd = depth(node.left);
//         let rightd = depth(node.right);
//         res = Math.max(res, leftd + rightd);
//         return 1 + Math.max(rightd, leftd);
//     }
//     depth(root);
//     return res;
// };
// console.log(diameterOfBinaryTree([1,2,3,4,5]));

// ------------

var diameterOfBinaryTree = function(root) {
    if(!root) return;
    let max = 0;
    const dfs = (node)=>{
        if(!node){
            return 0
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
        max = Math.max(left+right, max);
        return 1+Math.max(left,right)
    }
    dfs(root);
    return max
}
console.log(diameterOfBinaryTree([1,2,]));

// ---------------------

