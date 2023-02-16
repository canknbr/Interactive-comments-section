import React from 'react';
import plusIcon from '../../../../public/images/icon-plus.svg';
import minusIcon from '../../../../public/images/icon-minus.svg';
import { Button } from '../../button';
import styles from './styles.module.scss';
import { useCommentHook } from '../useCommentHook';
function Reactions() {
  const {
    comment: { score },
  } = useCommentHook();
  return (
    <div className={styles.reactionsWrapper}>
      <Button aria-labelledby="Positive reaction button">
        <img src={plusIcon} aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button aria-labelledby="Negative reaction button">
        <img src={minusIcon} aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Reactions };
