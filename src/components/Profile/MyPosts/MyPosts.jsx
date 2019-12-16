import React from 'react'
import Post from '../Post/Post'

import s from './MyPosts.module.css'

const textareaValue = React.createRef();

const MyPosts = props => {
  const { profilePage, despatch } = props;
  const posts = profilePage.posts;
  const newPostsText = profilePage.newPostsText;

  const addPost = () => {
    const value = textareaValue.current.value;
    despatch({type: 'SET_POST', message: value});
  }

  const onPostChange= () => {
    const value = textareaValue.current.value;
    despatch({type: 'UPDATE_NEW_POST_TEXT', message: value});
  }

  const postElements = posts.map(elem => {
    const { liksCount, message } = elem;
    return (
      <Post
        message={ message }
        liksCount={ liksCount }
      />
    )
  })

   return (
      <div>
        <textarea
          className={s.myPostTextarea}
          ref={textareaValue}
          value={newPostsText}
          onChange={onPostChange}
          rows='4'
          cols='40'
        />
        <button
          className={s.myPostButSent}
          onClick={addPost}
        >
          add post
        </button>
        { postElements }
      </div>
   )
}

export default MyPosts;
