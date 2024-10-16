import { mergeSort } from "./mergesort.js"

class Node {
    constructor(data) {
        this.data = data
        this.leftNode = null
        this.rightNode = null
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array, startingPosition, endingPosition) {
        let removedDuplicatesArray = [...new Set(array)]
        let sortedArray = mergeSort(removedDuplicatesArray)
        
        startingPosition = 0
        endingPosition = sortedArray.length - 1

        if (startingPosition > endingPosition) {
            return null
        }

        const middlePosition = (startingPosition + endingPosition)/2
        const root = new Node(sortedArray[middlePosition])

        return root
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const treeOne = new Tree(testArray)

console.log(treeOne.root)
prettyPrint(treeOne.root)
