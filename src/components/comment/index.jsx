import React from 'react';
import { Reactions } from './reactions';
import { Header } from './header';
import { Body } from './body';
import styles from './styles.module.scss';
import { useCommentHook, CommentContextProvider } from './useCommentHook';
function Comment() {
  const {
    comment: { replies },
    currentUser,
  } = useCommentHook();

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.contentArea}>
          <Header />
          <Body />
        </div>
      </div>
      {replies?.length > 0 && (
        <div className={styles.replies}>
          {replies.map(reply => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
    </>
  );
}

export { Comment };
