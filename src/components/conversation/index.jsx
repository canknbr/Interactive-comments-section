import React, { useState } from 'react';
import { Comment } from '../comment';
import { NewCommentEditor } from '../new-comment-editor';
import { CommentContextProvider } from '../comment/useCommentHook';
import Data from '../../../data.json';
import styles from './styles.module.scss';
function Conversation() {
  const { currentUser } = Data;
  const [comments, setComments] = useState(Data.comments);
  const handleNewComment = newComment => {
    setComments([
      ...comments,
      {
        id: Math.random() * 1000,
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        score: 0,
        user: currentUser,
      },
    ]);
  };
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

      <NewCommentEditor onClick={handleNewComment} />
    </div>
  );
}

export { Conversation };
