import React from 'react'

// components
import Post from '../Post/Post'

// styles
import s from './MyPosts.module.css'

const textareaValue = React.createRef();

const MyPosts = (
  addPost,
  onPostChange,
  profilePage
) => {
  const posts = profilePage.posts;
  const newPostsText = profilePage.newPostsText;

  const addPostHandler = () => {
    addPost();
  }

  const onPostChangeHandler = () => {
    const value = textareaValue.current.value;
    onPostChange(value);
  }

  const postElements = posts.map(elem => {
    const { liksCount, message } = elem;
    return (
      <Post
        message={message}
        liksCount={liksCount}
      />
    )
  })

  return (
    <div>
      <textarea
        className={s.myPostTextarea}
        ref={textareaValue}
        value={newPostsText}
        onChange={onPostChangeHandler}
        rows='4'
        cols='40'
      />
      <button
        className={s.myPostButSent}
        onClick={addPostHandler}
      >
        add post
        </button>
      {postElements}
    </div>
  )
}

export default MyPosts;
