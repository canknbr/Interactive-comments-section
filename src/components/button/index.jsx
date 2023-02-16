import React from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

function Button({ variant = 'ghost', children, ...rest }) {
  return (
    <button className={clsx(styles.button, styles[variant])} {...rest}>
      {children}
    </button>
  );
}

export { Button };
