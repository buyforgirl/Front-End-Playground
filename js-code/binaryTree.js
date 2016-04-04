function treeNode(name) {
    this.left = null;
    this.right = null;
    this.name = name;
}

function binaryTree(name) {
  this.root = new treeNode(name);
}

binaryTree.prototype = {
    constructor: binaryTree,
    insert : function(name) {
      var cur = this.root;
      while (cur != null) {
        if (name < cur.name) {
          if (cur.left === null) {
            cur.left = new treeNode(name);
            break;
          } else {
             cur = cur.left;
          }
        } else {
          if (cur.right === null) {
            cur.right = new treeNode(name);
            break;
          } else {
            cur = cur.right;
          }
        }
      }
    },
    dfs: function(root) {
      if (root === null) {
        return;
      }
      
      this.dfs(root.left);
      console.log('dfs visit:' + root.name);
      this.dfs(root.right);
    },
    bfs: function(root) {
      var queue = [];
      queue.push(root);
      while (queue.length > 0) {
        var node = queue.shift();
        console.log('bfs visit:' + node.name)
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
}

var tree = new binaryTree('r');
tree.insert('b');
tree.insert('c');
tree.insert('d');
tree.insert('e');
tree.insert('f');
tree.insert('v');
tree.insert('x');
tree.insert('y');
tree.insert('z');
tree.insert('u');
tree.dfs(tree.root);
console.log('-----------');
tree.bfs(tree.root);