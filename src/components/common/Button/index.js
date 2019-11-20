import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import localClasses from './styles.module.css';
import { ThemeContext } from '../../../contexts/Theme';

const Button = ({ title, leftIcon, rightIcon, color, classes, styles, type, onClick }) => {
  const theme = useContext(ThemeContext);

  const renderIcon = (icon, iconClasses, style) => (
    <svg
      className={clsx(theme[color], ...iconClasses)}
      style={style}
    >
      {icon}
    </svg>
  );

  return (
    <button
      className={clsx(theme[color], localClasses.container, classes.container)}
      style={styles.container}
      type={type}
      onClick={onClick}
    >
      {
        leftIcon
          && renderIcon(leftIcon, [localClasses.leftIcon, classes.leftIcon], styles.leftIcon)
      }
      <span
        className={clsx(theme.largeFontSize, localClasses.title, classes.title)}
        style={styles.title}
      >
        {title}
      </span>
      {
        rightIcon
          && renderIcon(rightIcon, [localClasses.rightIcon, classes.rightIcon], styles.rightIcon)
      }
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  type: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.shape({
    container: PropTypes.string,
    title: PropTypes.string,
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
  }),
  styles: PropTypes.shape({
    container: PropTypes.object,
    title: PropTypes.object,
    rightIcon: PropTypes.object,
    leftIcon: PropTypes.object,
  }),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'default',
  type: 'button',
  classes: {},
  styles: {},
  onClick: () => {},
};

export default Button;
