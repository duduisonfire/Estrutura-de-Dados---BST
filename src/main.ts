import { BinaryTree } from './BST/BinaryTree';

// import { quickSort } from './QuickSort';

// export const listOfNumbers = [33, 12, 2, 58, 43, 294, 1, 2, 987, 121];
// console.log(listOfNumbers);

// quickSort(listOfNumbers);
// console.log(listOfNumbers);

// Teste da Árvore Binária
const binaryTree = new BinaryTree(11);
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

binaryTree.inOrderTraverse(console.log);
binaryTree.inverse();

console.log('------------------');
binaryTree.inOrderTraverse(console.log);
