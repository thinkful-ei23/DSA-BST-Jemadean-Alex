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
  console.log(isItBST(BST));


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

//IS IT BST?
//input: binary tree--no more than 2 children
//output: boolean; true if BST, false if only binary tree
//binary search tree is binary tree with lower values on left, higher values on right
//look at every node, if (node.left !== null && node.left.value < node.value) && (node.right !== null && node.right.value > node.value)

function isItBST(binaryTree) {
  if((binaryTree.left !== null && binaryTree.left.value < binaryTree.value) && (binaryTree.right !== null && binaryTree.right.value > binaryTree.value)) {
    let option1 = isItBST(binaryTree.left);
    let option2 = isItBST(binaryTree.right);
    if (option1 === true && option2 === true) {
      return true;
    } else {
      return false;
    }
  } else if (binaryTree.left !== null) {
    if (binaryTree.left.value < binaryTree.value) {
      return isItBST(binaryTree.left);
    }
    return false;    
  } else if (binaryTree.right !== null) {
    if (binaryTree.right.value > binaryTree.value) {
      return isItBST(binaryTree.right);
    }
    return false;    
  } else {
    return true;
  }


}

main();