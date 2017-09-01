const defaultOutlineStyles = `
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
`;

const defaultNoOutlineStyles = `
outline: none;
`;

const defaultFocusSelector = '*:focus';

const focus = (selector, declarations) => `
${selector} {
  ${declarations}
}`;

/**
 * Removes CSS outlines in an accessible manner:
 * only for clicks, not for keyboard interactions.
 * @param {string} outlineStyles CSS Declarations to apply when outlines are needed.
 * @param {string} noOutlineStyles CSS Declarations to apply when outlines are not needed.
 * @param {string} focusSelector Selector to use when setting the focus styles.
 */
const initAccessibleFocus = (outlineStyles = defaultOutlineStyles, noOutlineStyles = defaultNoOutlineStyles, focusSelector = defaultFocusSelector) => {
  const styles = document.createElement('style');
  document.querySelector('head').appendChild(styles);

  const outline = focus(focusSelector, outlineStyles);
  const noOutline = focus(focusSelector, noOutlineStyles);

  styles.innerHTML = noOutline;

  window.addEventListener('mousedown', () => {
    styles.innerHTML = noOutline;
  });

  window.addEventListener('keydown', e => {
    const isTabKey = e.keyCode === 9;

    if (isTabKey) {
      styles.innerHTML = outline;
    }
  });
};

export default initAccessibleFocus;
