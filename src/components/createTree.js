class Node {
  constructor(parent){
    this.parent = parent;
    this.childNodes = [];
  }
}

class Tree {
  constructor(parent) {
    this._root = new Node(parent);
  }

  addBranches(branch) {
    for(let i=0; i<branch.length; i++){
      this._root.childNodes.push(new Node(branch[i]));
    }
  }

  addCommitNode(parent, child){
    parent.map((key, i) => this._root.childNodes[key].childNodes.push(new Node(child[i])));
  }


  addChildNode(parent, child, root){
    parent.map((key, i) => this._root.childNodes[key].childNodes[child[i]].childNodes.push(new Node(root[i])))
  }

  addGrandChild(parent, child, g_child, root){
    parent.map((key, i) => this._root.childNodes[key].childNodes[child[i]].childNodes[g_child[i]].childNodes.push(new Node(root[i])))
  }
  
}

let tree = new Tree('Tree Log');

//adding branch nodes
tree.addBranches(['Branch Dev','Branch v1','Branch v2']);


// //adding commit nodes
tree.addCommitNode([0,0,2], ['commit dev_1', 'commit dev_2', 'commit v2_1']);
tree.addCommitNode([1,1,2], ['commit dev_1', 'commit dev_2', 'commit dev_1']);
tree.addChildNode([0,0,0], [0,0,0], ['Commit root', 'Commit Message', 'Date']);
tree.addChildNode([1,1,1], [0,0,0], ['Commit root', 'Commit Message', 'Date']);
tree.addChildNode([2,2,2], [0,0,0], ['Commit root', 'Commit Message', 'Date']);
tree.addGrandChild([0,0,0], [0,0,0], [0,1,2], ['a9ca2c9f4e1e0061075aa47cbb97201a43b0f66f', 'implement a shopping cart','2014-02-06 13:22:37 +0100']);
tree.addGrandChild([2,2,2], [0,0,0], [0,1,2], ['d2ca2c9f4e1e0061075aa47cbb97201a43b0f66f', 'gateway payment system','2014-07-13 13:22:37 +0100']);

export default tree;