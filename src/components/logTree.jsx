import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import PropTypes from 'prop-types';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggle = () => {
    this.setState({visible: !this.state.visible});
  };
  

  render() {
    let childNodes;
    let className;

    if (this.props.node.childNodes.length > 0) {
      childNodes = this.props.node.childNodes.map((node, index) => {
        return <li key={index}><TreeNode node={node} /></li>
      });

      className = 'toggle';
      if (this.state.visible) {
        className += ' toggle-down';
      } else {
        className += ' toggle-up';
      }
    }

    let style;
    if (!this.state.visible) {
      style = {display: "none"};
    }

    return (
      <div className="container paddingBody">
        <h5 onClick={this.toggle} className={className}>
          {this.props.node.parent}
        </h5>
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
}

export default TreeNode;

TreeNode.propTypes = {
  visible: PropTypes.bool,
  childNodes: PropTypes.node,
  parent: PropTypes.node
};
