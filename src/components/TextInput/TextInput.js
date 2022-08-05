import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./TextInput.module.scss";

//rightIcon has togglePasswordVisibility function controlled by a prop.
const TextInput = (props) => {
  const {
    leftIcon,
    rightIcon,
    errorMessage,
    name,
    value,
    onChange,
    placeholder,
    type,
    size,
    gsmCodes,
    gsmCodeIcons,
    isTogglePasswordVisibility,
    isClearSearchValueOnClick,
    setClearSearchValue,
    disabled,
    ...inputProps
  } = props;

  const [selectedGsmCode, setSelectedGsmCode] = useState("TR");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);
  const textInputContentContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  //dropdown width & top offset setting.
  useLayoutEffect(() => {
    if (isDropdownOpen) {
      const width = textInputContentContainerRef.current.offsetWidth;
      const height = textInputContentContainerRef.current.offsetHeight;
      dropdownRef.current.style.width = width + "px";
      dropdownRef.current.style.top = height + 8 + "px";
    }
  }, [isDropdownOpen]);

  //find & add className to icons that have onClick
  useEffect(() => {
    const childrens = [...textInputContentContainerRef.current.children];
    const iconsWithOnClick = childrens.filter((ele) => {
      return [...ele.classList].includes(styles.icon) && ele.onclick !== null;
    });
    iconsWithOnClick.forEach((element) =>
      element.classList.add(styles.iconWithOnClick)
    );
  }, []);

  const handleClassname = () => {
    let classnameStr = styles.textInputContent;
    if (size === "small") {
      classnameStr = classnameStr + " " + styles.small;
    }
    if (disabled) return (classnameStr += " " + styles.disabled);
    if (errorMessage) {
      return classnameStr + " " + styles.error;
    }
    if (value && value.length > 0) {
      classnameStr = classnameStr + " " + styles.filled;
    }
    return classnameStr;
  };

  const togglePasswordVisibility = () => {
    const inputType =
      inputRef.current.getAttribute("type") === "password"
        ? "text"
        : "password";
    inputRef.current.setAttribute("type", inputType);
  };

  const handleDropdownItemSelect = (code) => {
    setSelectedGsmCode(code);
    setIsDropdownOpen(false);
  };
  const handleRightIconOnClickByProps = () => {
    if (!disabled) {
      if (isTogglePasswordVisibility) {
        return () => togglePasswordVisibility();
      } else if (isClearSearchValueOnClick) {
        return () => setClearSearchValue();
      }
    }
    return null;
  };
  return (
    <aside
      className={
        disabled
          ? styles.textInputWrapper + " " + styles.disabled
          : styles.textInputWrapper
      }
    >
      <div className={handleClassname()} ref={textInputContentContainerRef}>
        {gsmCodeIcons && name === "GSM" && (
          <span
            className={styles.icon}
            onClick={
              !disabled ? () => setIsDropdownOpen(!isDropdownOpen) : null
            }
          >
            {
              gsmCodeIcons.find((icon) => icon[selectedGsmCode])[
                selectedGsmCode
              ]
            }
          </span>
        )}

        {leftIcon && (
          <span
            className={styles.icon}
            onClick={
              !disabled && name === "GSM"
                ? () => setIsDropdownOpen(!isDropdownOpen)
                : null
            }
          >
            {leftIcon}
          </span>
        )}

        <input
          className={styles.input}
          name={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Placeholder"}
          ref={inputRef}
          disabled={disabled}
          {...inputProps}
        />
        {rightIcon && (
          <span
            className={styles.icon}
            onClick={handleRightIconOnClickByProps()}
          >
            {rightIcon}
          </span>
        )}
        {isDropdownOpen && (
          <div className={styles.dropdown} ref={dropdownRef}>
            <ul>
              {gsmCodes.map((gsmCode, i) => {
                const { name, code, dial_code } = gsmCode;
                return (
                  <li key={i} onClick={() => handleDropdownItemSelect(code)}>
                    <p>{name.length > 15 ? `${name.slice(0, 14)}...` : name}</p>
                    <p>({dial_code})</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </aside>
  );
};

export default TextInput;
