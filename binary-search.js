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

    insert(root, value) {
        if (root === null) {
            return new Node(value)
        }

        if (root.data === value) {
            return root
        }

        if (value < root.data) {
            root.leftNode = this.insert(root.leftNode, value)
        } else if (value > root.data) {
            root.rightNode = this.insert(root.rightNode, value)
        }

        return root
    }

    getSuccessor(node) {
        node = node.rightNode
        while (node !== null && node.leftNode !== null) {
            node = node.leftNode
        }
        return node;
    }

    delete(root, value) {
        if (root === null) {
            return null
        }
         if (root.data > value) {
            root.leftNode = this.delete(root.leftNode, value)
         } else if (root.data < value) {
            root.rightNode = this.delete(root.rightNode, value)
         } else {
            if (root.leftNode === null) {
                return root.rightNode
            }

            if (root.rightNode === null) {
                return root.leftNode
            }

            let successor = this.getSuccessor(root)
            root.data = successor.data
            root.rightNode = this.delete(root.rightNode, successor.data)
         }
         return root
    }

    find(root, value) {
        if (root === null || root.data === value) {
            return root
        }

        if (root.data < value) {
            return this.find(root.rightNode, value)
        }

        return this.find(root.leftNode, value)
    }

    levelOrder(callback) {
        if (!callback) {
            throw new Error('Callback function required as argument')
        }

        const queue = []

        if (this.root) {
            queue.push(this.root)
        }

        while (queue.length > 0) {
            let node = queue.shift()
            callback(node)

            if (node.leftNode) {
                queue.push(node.leftNode)
            }
            if (node.rightNode) {
                queue.push(node.rightNode)
            }
        }
    }

    inOrder(callback, node = this.root) {
        if (!callback) {
            throw new Error('Callback function required as argument')
        }   

        if(node === null) {
            return
        }

        this.inOrder(callback, node.leftNode)
        callback(node)
        this.inOrder(callback, node.rightNode)
    }
    
    preOrder(callback, node = this.root) {
        if (!callback) {
            throw new Error('Callback function required as argument')
        }
        
        if (node === null) {
            return
        }

        callback(node)
        this.preOrder(callback, node.leftNode)
        this.preOrder(callback, node.rightNode)
    }

    postOrder(callback, node = this.root) {
        if (!callback) {
            throw new Error('Callback function required as argument')
        }

        if (node === null) {
            return
        }

        this.postOrder(callback, node.leftNode)
        this.postOrder(callback, node.rightNode)
        callback(node)
    }

    height(node) {
        if (node === null) {
            return -1
        }

        let leftTreeHeight = this.height(node.leftNode)
        let rightTreeHeight = this.height(node.rightNode)

        return Math.max(leftTreeHeight, rightTreeHeight) + 1
    }

    depth(node) {

    }

    isBalanced() {

    }

    rebalance() {

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

testTree.delete(testTree.root, 67)

prettyPrint(testTree.root)

console.log(testTree.height(testTree.root))