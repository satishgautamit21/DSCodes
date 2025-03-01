class Node {
    constructor(value, right=null, left=null) {
        this.value=value;
        this.right = right;
        this.left = left
    }
}

class BST {
    constructor(){
        this.root=null
    }

    find(value){
        if(!this.root) return false;
        let current = this.root;
        let found = false; 
        while(current && !found){ 
            if(value < current.value){ 
                current = current.left; 
            } else if(value > current.value){ 
                current = current.right; 
            } else { 
                found = true; 
            } 
        } 
        if(!found) return undefined; 
        return current; 
    }

    contains(value){ 
        if(this.root === null) return false; 
        var current = this.root, 
        found = false; 
        while(current && !found){ 
            if(value < current.value){ 
                current = current.left; 
            } else if(value > current.value){ 
                current = current.right; 
            } else { 
                return true; 
            } 
        } 
        return false; 
    }


    /*
        The largest node is the rightmost node (deepest node in the right subtree).
        The second largest node can be found in two cases:
        If the largest node has a left subtree, the second largest node is the 
        rightmost node in that left subtree.
        Otherwise, the parent of the largest node is the second largest.
    */
    findSecondLargest() { 
        if(this.root === null) return false; 
        var current = this.root, 
        first = null, 
        second = null; 

        // find the largest node
        while(current !== null){
            
            // if the current node has a right subtree
            if(current.right !== null){ 
                current = current.right; 
            } else { // if the current node does not have a right subtree 
                if(first === null){ 
                    first = current; 
                } else { 
                    second = current; 
                    return second; 
                }
                current = current.left; 
            } 
        } 
        return second; 
    }
}