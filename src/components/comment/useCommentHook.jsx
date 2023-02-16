import React, { useContext, useState, useMemo, createContext } from 'react';

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(data.comment);
  const handleReply = () => setIsReplying(!isReplying);
  const onDelete = () => {
    setComment(null);
  };
  const onEditing = () => {
    setIsEditing(!isEditing);
  };
  const onUpdate = newComment => {
    setComment({ ...comment, content: newComment });
    onEditing();
  };
  const onPlus = () => {
    setComment({ ...comment, score: comment.score + 1 });
  };
  const onMinus = () => {
    setComment({ ...comment, score: comment.score - 1 });
  };
  const onNewReply = newReply => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Math.random() * 1000,
          content: newReply,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    handleReply();
  };
  const contextData = useMemo(
    () => ({
      onPlus,
      onMinus,
      onNewReply,
      comment,
      currentUser: data.currentUser,
      isReplying,
      isEditing,
      handleReply,
      onDelete,
      onEditing,
      onUpdate,
    }),
    [comment, isReplying, isEditing]
  );
  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useCommentHook() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useCommentHook must be used within a CommentContext');
  }
  return context;
}

export { CommentContextProvider, useCommentHook };
