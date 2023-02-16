import React from 'react';
import { useCommentHook } from '../useCommentHook';
import styles from './styles.module.scss';
function Body() {
  const {
    comment: { content },
  } = useCommentHook();
  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export { Body };
