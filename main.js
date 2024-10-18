import { Tree } from "./binary-search.js";

function prettyPrint(node, prefix = "", isLeft = true) {
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

let orderArray = []

function printItems(node) {
    orderArray.push(node.data)
}

const randomNumberArray = Array.from({length: 14}, () => Math.floor(Math.random() * 100))

const randomNumTree = new Tree(randomNumberArray)

// Testing for Original Tree

console.log('--------------------Original Tree---------------------------')

prettyPrint(randomNumTree.root)

console.log(`\nTree Balanced? ${randomNumTree.isBalanced(randomNumTree.root)}`)

randomNumTree.levelOrder(printItems)
console.log(`Level-Order: ${orderArray}`)
orderArray = []

randomNumTree.preOrder(printItems)
console.log(`Pre-Order: ${orderArray}`)
orderArray = []

randomNumTree.postOrder(printItems)
console.log(`Post-Order: ${orderArray}`)
orderArray = []

randomNumTree.inOrder(printItems)
console.log(`In-Order: ${orderArray}`)
orderArray = []

// Testing After Insertion

console.log('\n--------------------Original Tree w/ New Nodes----------------------')

randomNumTree.insert(randomNumTree.root, 574)
randomNumTree.insert(randomNumTree.root, 8945)
randomNumTree.insert(randomNumTree.root, 243)
randomNumTree.insert(randomNumTree.root, 718)

prettyPrint(randomNumTree.root)

console.log(`\nTree Balanced? ${randomNumTree.isBalanced(randomNumTree.root)}`)


console.log('\n--------------------Rebalanced Tree----------------------')
randomNumTree.rebalance()

prettyPrint(randomNumTree.root)
console.log(`\nTree Balanced? ${randomNumTree.isBalanced(randomNumTree.root)}`)

randomNumTree.levelOrder(printItems)
console.log(`Level-Order: ${orderArray}`)
orderArray = []

randomNumTree.preOrder(printItems)
console.log(`Pre-Order: ${orderArray}`)
orderArray = []

randomNumTree.postOrder(printItems)
console.log(`Post-Order: ${orderArray}`)
orderArray = []

randomNumTree.inOrder(printItems)
console.log(`In-Order: ${orderArray}`)
orderArray = []
