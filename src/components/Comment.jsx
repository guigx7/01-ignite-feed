import { ThumbsUp, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComent() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
    console.log(likeCount);
    setLikeCount(likeCount + 1);
  } 

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guigx7.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Tavares</strong>
              <time title='28 de Janeiro às 00:38' dateTime='2023-01-28 00:38'>Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComent} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}