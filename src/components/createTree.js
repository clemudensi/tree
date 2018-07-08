class Node {
  constructor(parent){
    this.parent = parent;
    this.childNodes = [];
  }
}

class Tree {
  constructor(parent) {
    let node = new Node(parent);
    this._root = node;
  }

  addBranches(branch) {
    for(let i=0; i<branch.length; i++){
      this._root.childNodes.push(new Node(branch[i]));
    }
  }

  addCommitNode(index, commit){
    this._root.childNodes[index].childNodes.push(new Node(commit));
  }


  addCommitHashNode(parent, child, hash){
    this._root.childNodes[parent].childNodes[child].childNodes.push(new Node(hash));
  }

  addCommitHash(parent, child, g_child, hash){
    this._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(hash));
  }

  addCommitMsg(parent, child, g_child, msg){
    this._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(msg));
  }

  addCommitDate(parent, child, g_child, date){
    this._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(date));
  }
}

let tree = new Tree('Tree Log');

//adding branch nodes
tree.addBranches(['Branch Dev','Branch v1','Branch v2']);

//adding commit nodes
tree.addCommitNode(0, 'commit dev_1');
tree.addCommitNode(0, 'commit dev_2');
tree.addCommitNode(2, 'commit v2_1');

//branch dev commit 1 and its nodes
tree.addCommitHashNode(0, 0, 'Commit hash');
tree.addCommitHashNode(0, 0, 'Commit Message');
tree.addCommitHashNode(0, 0, 'Date');
tree.addCommitHash(0,0,0, 'a9ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
tree.addCommitMsg(0,0,1, 'implement a shopping cart');
tree.addCommitDate(0,0,2, '2014-02-06 13:22:37 +0100');

//branch dev commit 2 and its nodes
tree.addCommitHashNode(0, 1, 'Commit hash');
tree.addCommitHashNode(0, 1, 'Commit Message');
tree.addCommitHashNode(0, 1, 'Date');
tree.addCommitHash(0,1,0, 'd2ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
tree.addCommitMsg(0,1,1, 'gateway payment system');
tree.addCommitDate(0,1,2, '2014-07-13 13:22:37 +0100');

//branch v2 commit 1 and its nodes
tree.addCommitHashNode(2,0, 'Commit hash');
tree.addCommitHashNode(2,0, 'Commit Message');
tree.addCommitHashNode(2,0, 'Date');
tree.addCommitHash(2,0,0, 'd2ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
tree.addCommitMsg(2,0,1, 'gateway payment system');
tree.addCommitDate(2,0,2, '2014-07-13 13:22:37 +0100');

export default tree;