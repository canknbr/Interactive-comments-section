import React from 'react';
import styles from './styles.module.scss';
import { Button } from '../../button';
import { useCommentHook } from '../useCommentHook';
import deleteIcon from '../../../../public/images/icon-delete.svg';
import editIcon from '../../../../public/images/icon-edit.svg';
import replyIcon from '../../../../public/images/icon-reply.svg';
function Header() {
  const {
    comment: {
      createdAt,
      user: { username },
    },
    handleReply,
    currentUser,
    onDelete,
    onEditing,
  } = useCommentHook();
  const isCurrentUser = currentUser.username === username;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {isCurrentUser && <span className={styles.youIndicator}>you</span>}
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.actionButtons}>
        {isCurrentUser ? (
          <>
            <Button onClick={onDelete} variant="warning">
              <img src={deleteIcon} alt="" />
              Delete
            </Button>
            <Button onClick={onEditing}>
              <img src={editIcon} alt="" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={handleReply}>
            <img src={replyIcon} alt="" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
}

export { Header };
