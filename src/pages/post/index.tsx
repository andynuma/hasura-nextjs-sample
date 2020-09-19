import { NextPage } from 'next'
import React from 'react'

import styles from './index.module.css'

import autosize from 'autosize'
import { Button } from '../../components/button'

const PostPage: NextPage = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current) {
      autosize(ref.current)
    }
  }, [])

  return (
    <>
      <div className={styles.editContent}>
        <input type="text" placeholder="タイトル" className={styles.subject} />
        <textarea
          className={styles.editor}
          placeholder="本文"
          ref={ref}
        ></textarea>
      </div>
      <div className={styles.footer}>
        <Button text={'投稿'} />
      </div>
    </>
  )
}

export default PostPage
