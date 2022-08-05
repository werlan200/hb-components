import React, { useRef } from "react";
import styles from "./Table.module.scss";
//hover yapinca butonları gostermenin yolunu bul
//birde column resize durumunda en sonda contenti seçiyor ona bak ve kontrolu yap

const Table = (props) => {
  const { data, columns } = props;
  const amkref = useRef(null);

  const handleOnClick = (e) => {
    console.log(e);
    console.log("cellindex:", e.target.cellIndex);
    console.log(e.target.getBoundingClientRect());
    amkref.current = e.target;
  };
  const handleOnMouseMove = (e) => {
    if (amkref.current) {
      amkref.current.style.width =
        e.nativeEvent.x - amkref.current.offsetLeft + "px";
    }
    // console.log("cellindex:", e.target.cellIndex);
    // console.log("x,y:", e.nativeEvent.x, e.nativeEvent.y);
  };
  const handleOnMouseUp = (e) => {
    amkref.current = null;
  };
  return (
    <div
      className={styles.divimsi}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
    >
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex} onMouseDown={handleOnClick}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {data.map((row, rowIndex) => {
            if (rowIndex < 5) {
              return (
                <tr key={rowIndex}>
                  {row.map((rowData, columnIndex) => (
                    <td key={columnIndex}>{rowData}</td>
                  ))}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
