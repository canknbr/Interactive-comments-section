import React from 'react';
import { Reactions } from './reactions';
import { Header } from './header';
import { Body } from './body';
import styles from './styles.module.scss';
import { useCommentHook, CommentContextProvider } from './useCommentHook';
import { NewCommentEditor } from '../new-comment-editor';
function Comment() {
  const { comment, currentUser, isReplying ,onNewReply} = useCommentHook();
  if (!comment) return null;
  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.contentArea}>
          <Header />
          <Body />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment?.replies.map(reply => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && <NewCommentEditor
      onClick={onNewReply}
       isReply />}
    </>
  );
}

export { Comment };
