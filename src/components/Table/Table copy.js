import React, { useRef, useLayoutEffect } from "react";
import styles from "./Table.module.scss";
//hover yapinca butonları gostermenin yolunu bul
//birde column resize durumunda en sonda contenti seçiyor ona bak ve kontrolu yap

//before after elementi ya class adıyla hallet ya da css variable
const Table = (props) => {
  const { data, columns, rowHoverChildren, newColumns } = props;
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  const rowHoverContainerRef = useRef([]);
  const tableHeadCellsRef = useRef([]);
  const tableBodyCellsRef = useRef([]);
  const columnIndexToBeResized = useRef(-1);
  const scrollBarOffsetX = useRef(0);
  console.log(newColumns);
  useLayoutEffect(() => {
    if (data.length) {
      for (let i = 0; i < Object.keys(columns).length; i++) {
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
    // return styles.cell + " " + styles[columnBasedClassName];
  };
  const handleRowHoverLeftOnScroll = (e) => {
    rowHoverContainerRef.current.forEach(
      (container) => (container.style.left = e.target.scrollLeft + "px")
    );
    scrollBarOffsetX.current = Math.floor(e.target.scrollLeft);
  };
  const handleResizeColumnContainerOnMouseOver = (e, columnIndex) => {
    const columnCells = getElementsByColumnClassIndex(columnIndex);
    columnCells.forEach((cell) =>
      cell.children[0].classList.add(styles.resizeColumnContainerHover)
    );
  };
  const handleOnMouseLeave = (e, columnIndex) => {
    const columnCells = getElementsByColumnClassIndex(columnIndex);
    columnCells.forEach((cell) =>
      cell.children[0].classList.remove(styles.resizeColumnContainerHover)
    );
  };
  const handleResizeColumnOnClick = (e, columnIndex) => {
    columnIndexToBeResized.current = columnIndex;
  };
  const handleTableOnMouseUp = (e) => {
    if (columnIndexToBeResized.current >= 0)
      columnIndexToBeResized.current = -1;
  };
  const resizeColumnOnMouseMove = (e) => {
    console.log(columnIndexToBeResized.current);
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
          (cell) => [...cell.classList].includes(styles[`c${columnIndex}`])
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
            onMouseLeave={handleTableOnMouseUp}
            onMouseUp={handleTableOnMouseUp}
            onMouseMove={resizeColumnOnMouseMove}
          >
            {Object.values(columns).map((ele, columnIndex) => (
              <li
                className={handleCellClassName(styles.cell, columnIndex)}
                key={columnIndex}
                ref={(ele) => (tableHeadCellsRef.current[columnIndex] = ele)}
              >
                <div
                  onMouseDown={(e) => handleResizeColumnOnClick(e, columnIndex)}
                  onMouseOver={(e) =>
                    handleResizeColumnContainerOnMouseOver(e, columnIndex)
                  }
                  onMouseLeave={(e) => handleOnMouseLeave(e, columnIndex)}
                  onMouseUp={handleTableOnMouseUp}
                  className={styles.resizeColumnContainer}
                ></div>
                <div className={styles.cellContent}>{ele}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.body}>
          {data.map((row, rowIndex) => {
            if (rowIndex < 5) {
              return (
                <ul className={styles.row} key={rowIndex}>
                  {Object.keys(columns).map((column, columnIndex) => {
                    return (
                      <li
                        className={handleCellClassName(
                          styles.cell,
                          columnIndex
                        )}
                        key={columnIndex}
                        ref={(ele) => tableBodyCellsRef.current?.push(ele)}
                      >
                        <div className={styles.resizeColumnContainer}></div>
                        <div className={styles.cellContent}>{row[column]}</div>
                      </li>
                    );
                  })}
                  <div
                    className={styles.rowHoverContainer}
                    ref={(ele) =>
                      (rowHoverContainerRef.current[rowIndex] = ele)
                    }
                  >
                    {rowHoverChildren}
                  </div>
                </ul>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
