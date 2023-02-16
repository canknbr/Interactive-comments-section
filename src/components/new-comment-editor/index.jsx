import React from 'react';
import { Button } from '../button';
import { TextArea } from '../textarea';
import styles from './styles.module.scss';
function NewCommentEditor({ isReply = false, onClick }) {
  const [comment, setComment] = React.useState('');
  const handleChange = e => {
    setComment(e.target.value);
  };
  const handleClick = () => {
    onClick(comment);
    setComment('');
  };
  return (
    <div className={styles.NewCommentEditorWrapper}>
      <div className={styles.imageWrapper}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <TextArea value={comment} onChange={handleChange} />
      <Button onClick={handleClick} variant="primary">
        {isReply ? 'Reply' : 'Send'}
      </Button>
    </div>
  );
}

export { NewCommentEditor };
