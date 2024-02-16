/* eslint-disable no-constant-condition */
import { TreeNode } from './TreeNode';

export class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor(root: T) {
    this.root = new TreeNode<T>(root);
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  search(value: T): TreeNode<T> | null {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  inOrderTraverse(callback: (value: T) => unknown) {
    if (this.root) this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node: TreeNode<T>, callback: (value: T) => unknown) {
    if (node != null) {
      if (node.left) this.inOrderTraverseNode(node.left, callback); // {3}
      callback(node.value); // {4}
      if (node.right) this.inOrderTraverseNode(node.right, callback); // {5}
    }
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value === node.value) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
        return node;
      }
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  inverse(node = this.root) {
    if (node) {
      const temp = node.right;
      node.right = node.left;
      node.left = temp;

      if (node.left) this.inverse(node.left);
      if (node.right) this.inverse(node.right);
    }
  }
}
