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
        let middlePosition = (startingPosition + endingPosition)/2

        const root = array[middlePosition]

        return root
    }
}

const testArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

console.log(testArray)

const treeOne = new Tree(testArray)

console.log(treeOne.root)