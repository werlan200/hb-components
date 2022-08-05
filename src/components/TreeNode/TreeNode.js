import React, { useState } from "react";
import styles from "./TreeNode.module.scss";

const TreeNode = (props) => {
  const { id, name, children, indent = 0, callback, disabled } = props;
  const [isChildrenShown, setIsChildrenShown] = useState(false);
  const handleOnClick = () => {
    if (children) {
      setIsChildrenShown((prev) => !prev);
    } else {
      callback(props);
    }
  };

  return (
    <>
      <div
        style={{ marginLeft: `${indent / 2} px` }}
        className={
          disabled
            ? styles.treeNode + " " + styles.disabledTreeNode
            : styles.treeNode
        }
      >
        <p onClick={disabled ? null : () => handleOnClick()}>{name}</p>
        {isChildrenShown &&
          children &&
          children.map((treeNode) => {
            return (
              <TreeNode
                key={treeNode.id}
                {...treeNode}
                indent={indent + 1}
                callback={callback}
              />
            );
          })}
      </div>
    </>
  );
};

export default TreeNode;
