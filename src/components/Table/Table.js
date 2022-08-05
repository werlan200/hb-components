import React, { useRef, useLayoutEffect } from "react";
import styles from "./Table.module.scss";
//resize yaparken parent(wrapper) margin yerse yamulabilir, position absolute ile cozulebilir

const Table = (props) => {
  const { data, columns, rowHoverChildren } = props;
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  const rowHoverContainerRef = useRef([]);
  const tableHeadCellsRef = useRef([]);
  const tableBodyCellsRef = useRef([]);
  const columnIndexToBeResized = useRef(-1);
  const scrollBarOffsetX = useRef(0);

  const denemeRef = useRef([]);
  //set each columns' size to max content width
  useLayoutEffect(() => {
    if (data.length) {
      for (let i = 0; i < columns.length; i++) {
        const elementsList = getElementsByColumnClassIndex(i);
        const maxWidth = Math.max(
          ...elementsList.map((ele) => ele.offsetWidth)
        );
        elementsList.forEach((ele) => (ele.style.width = maxWidth + "px"));

        //rowHoverContainer width set
        rowHoverContainerRef.current.forEach((container) => {
          container.style.width = tableRef.current.offsetWidth + "px";
        });
      }
    }
  }, [data]);

  const handleCellClassName = (baseClassname, columnIndex) => {
    const columnBasedClassName = `c${columnIndex}`;
    return baseClassname + " " + styles[columnBasedClassName];
  };
  const handleRowHoverLeftOnScroll = (e) => {
    rowHoverContainerRef.current.forEach(
      (container) => (container.style.left = e.target.scrollLeft + "px")
    );
    scrollBarOffsetX.current = Math.floor(e.target.scrollLeft);
  };
  const handleResizeColumnContainerHover = (
    e,
    columnIndex,
    isHovered = false
  ) => {
    console.log(denemeRef);
    const columnCells = getElementsByColumnClassIndex(columnIndex);
    columnCells.length &&
      columnCells.forEach((cell) =>
        isHovered
          ? cell.children[0].classList.add(styles.resizeColumnContainerHover)
          : cell.children[0].classList.remove(styles.resizeColumnContainerHover)
      );
  };

  const setColumnIndexToBeResizedToColumnIndex = (e, columnIndex) => {
    columnIndexToBeResized.current = columnIndex;
  };
  const setColumnIndexToBeResizedToNone = (e) => {
    if (columnIndexToBeResized.current >= 0)
      columnIndexToBeResized.current = -1;
  };
  const resizeColumnOnMouseMove = (e) => {
    if (columnIndexToBeResized.current >= 0) {
      const columnsToBeResized = getElementsByColumnClassIndex(
        columnIndexToBeResized.current
      );
      columnsToBeResized.forEach((column) => {
        const newWidth =
          e.nativeEvent.x -
          (column.offsetLeft -
            scrollBarOffsetX.current +
            wrapperRef.current.offsetLeft);
        column.style.width = (newWidth > 50 ? newWidth : 50) + "px";
      });
    }
  };
  const getElementsByColumnClassIndex = (columnIndex) => {
    return columnIndex >= 0
      ? [...tableHeadCellsRef.current, ...tableBodyCellsRef.current].filter(
          (cell) =>
            cell && [...cell.classList].includes(styles[`c${columnIndex}`])
        )
      : [];
  };
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={styles.table}
        ref={tableRef}
        onScroll={handleRowHoverLeftOnScroll}
      >
        <div className={styles.head}>
          <ul
            className={styles.row}
            onMouseLeave={setColumnIndexToBeResizedToNone}
            onMouseUp={setColumnIndexToBeResizedToNone}
            onMouseMove={resizeColumnOnMouseMove}
          >
            {columns.map((ele, columnIndex) => (
              <li
                className={handleCellClassName(styles.cell, columnIndex)}
                key={columnIndex}
                ref={(ele) => (tableHeadCellsRef.current[columnIndex] = ele)}
              >
                <div
                  onMouseDown={(e) =>
                    setColumnIndexToBeResizedToColumnIndex(e, columnIndex)
                  }
                  onMouseOver={(e) =>
                    handleResizeColumnContainerHover(e, columnIndex, true)
                  }
                  onMouseLeave={(e) =>
                    handleResizeColumnContainerHover(e, columnIndex, false)
                  }
                  onMouseUp={setColumnIndexToBeResizedToNone}
                  className={styles.resizeColumnContainer}
                ></div>
                <div className={styles.cellContent}>{ele.columnName}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.body}>
          {data.map((row, rowIndex) => {
            return (
              <ul className={styles.row} key={rowIndex}>
                {columns.map((columnObj, columnIndex) => {
                  if (columnObj.columnTypeAsString === "INPUT") {
                    columnObj.columnTypeProps.value = row[columnObj.dataKey];
                    columnObj.columnChildren = null;
                  } else {
                    columnObj.columnChildren = row[columnObj.dataKey];
                  }
                  if (columnObj.columnName === "Checkbox") {
                    columnObj.columnTypeProps.ref = denemeRef;
                  }
                  return (
                    <li
                      className={handleCellClassName(styles.cell, columnIndex)}
                      key={columnIndex}
                      ref={(ele) => tableBodyCellsRef.current?.push(ele)}
                    >
                      <div className={styles.resizeColumnContainer}></div>
                      <div className={styles.cellContent}>
                        {React.createElement(
                          columnObj.columnType,
                          {
                            ...columnObj.columnTypeProps,
                          },
                          columnObj.columnChildren
                        )}
                      </div>
                    </li>
                  );
                })}
                {rowHoverChildren && (
                  <div
                    className={styles.rowHoverContainer}
                    ref={(ele) =>
                      (rowHoverContainerRef.current[rowIndex] = ele)
                    }
                  >
                    {rowHoverChildren}
                  </div>
                )}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
