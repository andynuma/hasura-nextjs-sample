import { NextPage } from 'next'

import styles from './index.module.css'

const Post: NextPage = () => {
  return (
    <div className={styles.editContent}>
      <input type="text" placeholder="タイトル" className={styles.subject} />
      <textarea className={styles.editor} placeholder="本文"></textarea>
    </div>
  )
}

export default Post
