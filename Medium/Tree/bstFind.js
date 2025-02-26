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

    find(){
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
}