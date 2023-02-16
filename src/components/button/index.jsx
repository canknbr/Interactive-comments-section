import React from 'react';
import styles from './styles.module.scss';

function Button({ varian = 'ghost', children, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}

export { Button };
