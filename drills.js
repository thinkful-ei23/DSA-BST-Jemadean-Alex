'use strict';

const BinarySearchTree = require ('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  BST.insert(15, 15);
  BST.insert(16, 16);
  
  // HEIGHT OF A BST
  // Input is a BST
  // OUTPUT WILL BE A NUMBER WITH THE HEIGHT | should be 5
  console.log(heightOfBST(BST));

}

function heightOfBST(binarySearchTree) {
  if(binarySearchTree.left !== null && binarySearchTree.right !== null) {
    let option1 = heightOfBST(binarySearchTree.left) + 1;
    let option2 = heightOfBST(binarySearchTree.right) + 1;
    if (option1 > option2) {
      return option1;
    } else {
      return option2;
    }
  } else if (binarySearchTree.left !== null) {
    return heightOfBST(binarySearchTree.left) + 1;
  } else if (binarySearchTree.right !== null) {
    return heightOfBST(binarySearchTree.right) + 1;
  } else {
    return 1;
  }
}

main();