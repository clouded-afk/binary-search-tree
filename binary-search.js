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
        let removedDuplicatesArray = [...new Set(array)]
        let sortedArray = mergeSort(removedDuplicatesArray)
        
        const startingPosition = 0
        const endingPosition = sortedArray.length - 1

        if (startingPosition > endingPosition) {
            return null
        }

        const middlePosition = (startingPosition + endingPosition)/2
        const root = new Node(sortedArray[middlePosition])

        return root
    }
}

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const treeOne = new Tree(testArray)

treeOne.buildTree(testArray)