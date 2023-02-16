import React, { useContext, createContext } from 'react';

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  return (
    <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
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
