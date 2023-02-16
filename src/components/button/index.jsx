import React from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

function Button({ variant = 'ghost', children, className, ...rest }) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
