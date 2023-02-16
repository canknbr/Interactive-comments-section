import React from 'react';
import { Comment } from '../comment';
import { NewCommentEditor } from '../new-comment-editor';
import { CommentContextProvider } from '../comment/useCommentHook';
import Data from '../../../data.json';
import styles from './styles.module.scss';
function Conversation() {
  const { comments, currentUser } = Data;
  return (
    <div className={styles.conversationWrapper}>
      {comments.map(comment => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}

      <NewCommentEditor />
    </div>
  );
}

export { Conversation };
