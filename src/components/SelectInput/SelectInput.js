import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./SelectInput.module.scss";

const SelectInput = (props) => {
  const {
    size,
    data,
    placeholder,
    setSelectValue,
    dropdownIsHiddenIcon,
    dropdownIsVisibleIcon,
    onChange,
    errorMessage,
    disabled,
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const dropdownRef = useRef(null);
  const selectInputContentRef = useRef(null);

  //dropdown width & top offset setting.
  useLayoutEffect(() => {
    if (isDropdownOpen) {
      const width = selectInputContentRef.current.offsetWidth;
      const height = selectInputContentRef.current.offsetHeight;
      dropdownRef.current.style.width = width + "px";
      dropdownRef.current.style.top = height + 8 + "px";
    }
  }, [isDropdownOpen]);

  //takes itemWrapper prop as argument
  const selectItem = (selectedItemObject) => {
    setSelectedItem(selectedItemObject);
    setIsDropdownOpen(!isDropdownOpen);
    if (onChange) {
      onChange(selectedItemObject);
    } else {
      setSelectValue(selectedItemObject);
    }
  };

  const handleWrapperClassname = () => {
    let classNameStr = styles.selectInputWrapper;
    if (size === "small") classNameStr += " " + styles.small;
    if (disabled) return (classNameStr += " " + styles.disabled);
    if (isDropdownOpen) return (classNameStr += " " + styles.focus);
    if (errorMessage) return (classNameStr += " " + styles.error);
    if (selectedItem.name) classNameStr += " " + styles.filled;
    return classNameStr;
  };

  return (
    <div className={handleWrapperClassname()}>
      <div
        className={
          size === "small"
            ? styles.content + " " + styles.small
            : styles.content
        }
        onClick={!disabled ? () => setIsDropdownOpen(!isDropdownOpen) : null}
        ref={selectInputContentRef}
      >
        <p>{selectedItem.name || placeholder}</p>
        <div
          className={
            size === "small"
              ? styles.icon + " " + styles.smallIcons
              : styles.icon
          }
        >
          {isDropdownOpen ? dropdownIsVisibleIcon : dropdownIsHiddenIcon}
        </div>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown} ref={dropdownRef}>
          <ul className={styles.itemList}>
            {data.length &&
              data.map((item) => {
                const { id, name, disabled = false } = item;
                return (
                  <li
                    key={id}
                    className={
                      disabled
                        ? styles.itemWrapper + " " + styles.disabledItemWrapper
                        : styles.itemWrapper
                    }
                    onClick={disabled ? null : () => selectItem(item)}
                  >
                    <div>
                      <p>{name}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectInput;
