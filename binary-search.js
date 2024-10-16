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

    buildTree(array) {
        let startingPosition = 0
        let endingPosition = array.length - 1

        if (startingPosition > endingPosition) {
            return null
        }

        let middlePosition = (startingPosition + endingPosition)/2
        const root = new Node(array[middlePosition])

        return root
    }
}

const testArray = mergeSort([1, 7, 23, 8, 9, 4, 3, 5, 67, 6345, 324])

console.log(testArray)

const treeOne = new Tree(testArray)

console.log(treeOne.root)