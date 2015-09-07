# BST-JS

Implementation of Binary Search tree in Javascript.

Implemented Methods

- push
- dfs // depth first search
- inorder // inorder traversal 
- maxNode // find max node of given BST
- minNode // find min node of given BST

## Examples

var bstSample = new BST();

bstSample.push(3);

bstSample.push(2);

bstSample.push(4);

bstSample.push(1);

bstSample.push(5);

maxNode(bstSample); // returns 5

minNode(bstSample); // return 1

inorder(bstSample); // 1,2,3,4,5

dfs(bstSample); // 3, 2, 4, 1, 5
