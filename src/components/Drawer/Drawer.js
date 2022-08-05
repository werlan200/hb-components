import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./Drawer.module.scss";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import ReactDOM from "react-dom";

const Drawer = (props) => {
  const {
    title,
    subtitle,
    isClickingOutsideEnabled,
    width,
    footerChildren,
    children,
  } = props;
  const [contentScrollTop, setContentScrollTop] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const sectionRef = useRef(null);
  const contentTitleWrapperHeightWithoutMarginRef = useRef(0);

  //set dynamic content height & find content title wrapper's height
  useLayoutEffect(() => {
    const sectionChildren = [...sectionRef.current.children];
    const heightWithoutContent = sectionChildren.reduce((totalHeight, ele) => {
      if (![...ele.classList].includes(styles.content)) {
        return totalHeight + ele.offsetHeight;
      }
      return totalHeight;
    }, 0);
    const sectionHeight = sectionRef.current.offsetHeight;
    const contentContainer = sectionChildren.find((ele) =>
      [...ele.classList].includes(styles.content)
    );
    contentContainer.style.height = sectionHeight - heightWithoutContent + "px";

    contentTitleWrapperHeightWithoutMarginRef.current =
      contentContainer.getElementsByClassName(
        styles.contentTitleWrapper
      )[0].offsetHeight;
  }, []);

  const handleOnContentScroll = (e) => {
    setContentScrollTop(e.target.scrollTop);
  };
  const handleTitleVisibility = (classname) => {
    if (contentScrollTop > contentTitleWrapperHeightWithoutMarginRef.current) {
      return " " + classname;
    }
    return "";
  };
  const handleClickingOutside = (e) => {
    if (e.target.classList.contains(styles.wrapper)) setIsDrawerOpen(false);
  };
  return (
    isDrawerOpen && (
      <div
        className={styles.wrapper}
        onClick={isClickingOutsideEnabled ? handleClickingOutside : null}
      >
        <section
          className={styles.section}
          ref={sectionRef}
          style={width && { width: `${width}` }}
        >
          <header
            className={
              styles.header + handleTitleVisibility(styles.revealHeader)
            }
          >
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={() => setIsDrawerOpen(false)}
            >
              <Cross />
            </button>
            <h5
              className={
                styles.headerTitle +
                handleTitleVisibility(styles.headerTitleVisible)
              }
            >
              {title}
            </h5>
          </header>
          <article className={styles.content} onScroll={handleOnContentScroll}>
            <div
              className={
                styles.contentTitleWrapper +
                handleTitleVisibility(styles.contentTitleWrapperInvisible)
              }
            >
              <h2 className={styles.contentTitle}>{title}</h2>
              <p>{subtitle}</p>
            </div>
            {children}
          </article>
          {footerChildren && (
            <footer className={styles.footer}>{footerChildren}</footer>
          )}
        </section>
      </div>
    )
  );
};

export default Drawer;
