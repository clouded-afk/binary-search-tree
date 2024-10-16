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

    buildTree(array, startingPosition = 0, endingPosition) {
        let removedDuplicatesArray = [...new Set(array)]
        let sortedArray = mergeSort(removedDuplicatesArray)

        if (endingPosition === undefined) {
            endingPosition = sortedArray.length - 1
        }

        if (startingPosition > endingPosition) {
            return null
        }

        let middlePosition = Math.floor((startingPosition + endingPosition) / 2)
        let root = new Node(sortedArray[middlePosition])

        root.leftNode = this.buildTree(array, startingPosition, middlePosition - 1)
        root.rightNode = this.buildTree(array, middlePosition + 1, endingPosition)

        return root
    }

    insert(root, data) {
        if (root === null) {
            return new Node(data)
        }

        if (root.data === data) {
            return root
        }

        if (data < root.data) {
            root.leftNode = this.insert(root.leftNode, data)
        } else if (data > root.data) {
            root.rightNode = this.insert(root.rightNode, data)
        }

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

const testTree = new Tree(testArray)

testTree.insert(testTree.root, 100)
testTree.insert(testTree.root, 6)
testTree.insert(testTree.root, 12)

prettyPrint(testTree.root)
