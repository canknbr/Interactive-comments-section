import React from 'react';
import { useCommentHook } from '../useCommentHook';
import styles from './styles.module.scss';
function Body() {
  const {
    comment: { content, replyingTo },
  } = useCommentHook();
  return (
    <div>
      <p className={styles.content}>
        {replyingTo && (
          <span className={styles.replyingTo}>@{replyingTo}&nbsp; </span>
        )}

        {content}
      </p>
    </div>
  );
}

export { Body };
