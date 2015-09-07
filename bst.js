function BST() {
    this.root = null;
}

BST.prototype = {
    createNode: function(val) {
        return {
            this.value = val;
			this.left = null;
			this.right = null;
        }
    },
    push: function(val) {
	
		if(!this.root){
			this.root = this.createNode(val);
			return;
		}
		
		var currNode = this.root;
		var newNode = this.createNode(val);
		
		while(currNode){
			if(newNode.value < currNode.value){
				if(currNode.left) 
					currNode = currNode.left;
				else{
					currNode.left = newNode;
					break;
				}
			}else{
				if(currNode.right)
					currNode = currNode.right;
				else{
					currNode.right = newNode;
					break;
				}
			}
		}
    }
};

function dfs(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

function inorder(node){
   if(node){
      inorder(node.left);
      console.log(node.value);
      inorder(node.right);
   }
}

function maxNode(node){
	if(!node){
		return 0;
	}
	var currNode, rightNode;
	currNode = node;
	rightNode = node.right;
	while(rightNode){
		currNode = rightNode;
		rightNode = rightNode.right;
	}
	return currNode.value;
}

function minNode(node){
   if(!node){
      return 0;
   }
	var currNode, leftNode;
	currNode = node;
	leftNode = node.left;
	while(leftNode){
		currNode = leftNode;
		leftNode = leftNode.left;
	}
	return currNode.value;
}
