import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TreeNode from './components/logTree';
import createTree from './components/createTree'
import './index.css';


ReactDOM.render(
  <TreeNode node={createTree._root} />,
  document.getElementById("root")
);
