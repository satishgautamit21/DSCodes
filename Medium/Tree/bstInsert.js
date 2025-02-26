class Node {
    constructor(val, left, right){
        this.val=val;
        this.left = left;
        this.right = right
    }
}

class BST {
    constructor() {
        this.root=null
    }

    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return this;
        } else {
            let current = this.root
            while(true){
                if(value < current.value){
                    if(!current.left) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(!current.right) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                } 
            }
        }
    }
}