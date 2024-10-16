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
        let removedDuplicates = [...new Set(array)]
        let sortedArray = mergeSort(removedDuplicates)
        return sortedArray
    }
}

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const treeOne = new Tree(testArray)

console.log(treeOne.buildTree(testArray))