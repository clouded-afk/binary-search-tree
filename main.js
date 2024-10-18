import { Tree } from "./binary-search.js";

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

const randomNumberArray = Array.from({length: 14}, () => Math.floor(Math.random() * 100))

const randomNumTree = new Tree(randomNumberArray)

prettyPrint(randomNumTree.root)