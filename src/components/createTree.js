class Node {
  constructor(parent){
    this.parent = parent;
    this.childNodes = [];
  }
}

function Tree (parent) {
  let node = new Node(parent);
  this._root = node;
}

let tree = new Tree('Tree Log');

function addBranches(branch) {
  for(let i=0; i<branch.length; i++){
    tree._root.childNodes.push(new Node(branch[i]));
  }
}

function addCommitNode(index, commit){
  tree._root.childNodes[index].childNodes.push(new Node(commit));
}


function addCommitHashNode(parent, child, hash){
  tree._root.childNodes[parent].childNodes[child].childNodes.push(new Node(hash));
}

function addCommitHash(parent, child, g_child, hash){
  tree._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(hash));
}

function addCommitMsg(parent, child, g_child, msg){
  tree._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(msg));
}

function addCommitDate(parent, child, g_child, date){
  tree._root.childNodes[parent].childNodes[child].childNodes[g_child].childNodes.push(new Node(date));
}

//adding branch nodes
addBranches(['Branch Dev','Branch v1','Branch v2']);

//adding commit nodes
addCommitNode(0, 'commit dev_1');
addCommitNode(0, 'commit dev_2');
addCommitNode(2, 'commit v2_1');

//branch dev commit 1 and its nodes
addCommitHashNode(0, 0, 'Commit hash');
addCommitHashNode(0, 0, 'Commit Message');
addCommitHashNode(0, 0, 'Date');
addCommitHash(0,0,0, 'a9ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
addCommitMsg(0,0,1, 'implement a shopping cart');
addCommitDate(0,0,2, '2014-02-06 13:22:37 +0100');

//branch dev commit 2 and its nodes
addCommitHashNode(0, 1, 'Commit hash');
addCommitHashNode(0, 1, 'Commit Message');
addCommitHashNode(0, 1, 'Date');
addCommitHash(0,1,0, 'd2ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
addCommitMsg(0,1,1, 'gateway payment system');
addCommitDate(0,1,2, '2014-07-13 13:22:37 +0100');

//branch v2 commit 1 and its nodes
addCommitHashNode(2,0, 'Commit hash');
addCommitHashNode(2,0, 'Commit Message');
addCommitHashNode(2,0, 'Date');
addCommitHash(2,0,0, 'd2ca2c9f4e1e0061075aa47cbb97201a43b0f66f');
addCommitMsg(2,0,1, 'gateway payment system');
addCommitDate(2,0,2, '2014-07-13 13:22:37 +0100');

export default tree;