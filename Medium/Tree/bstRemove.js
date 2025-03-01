class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    removeHelper(node, value){
        if(!node) return null;
        if(value < node.value) node.left = this.removeHelper(node.left, value);
        else if(value > node.value) node.right = this.removeHelper(node.right, value);
        else {
            // case 1: no children
            if(!node.left && !node.right) node = null;
            // case 2: one child
            else if(!node.left) node = node.right;
            else if(!node.right) node = node.left;
            // case 3: two children
            else {
                let minNode = this.findMin(node.right);
                node.value = minNode.value;
                node.right = this.removeHelper(node.right, minNode.value);
            }
        }
        return node;
    }

    remove(value){
        this.root = this.removeHelper(this.root, value);
    }

    findMin(node){
        while(node.left) node = node.left;
        return node;
    }
}

