import React, { useState } from 'react';
import { Button } from '../../button';
import { TextArea } from '../../textarea';
import { useCommentHook } from '../useCommentHook';
import styles from './styles.module.scss';
function Body() {
  const {
    comment: { content, replyingTo },
    isEditing,
    onUpdate,
  } = useCommentHook();
  const [comment, setComment] = useState(content);
  const handleUpdate = ({ target }) => {
    setComment(target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <TextArea value={comment} onChange={handleUpdate} />
          <Button
            onClick={() => onUpdate(comment)}
            className={styles.updateButton}
            variant="primary"
          >
            Update
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp; </span>
          )}

          {content}
        </p>
      )}
    </div>
  );
}

export { Body };
