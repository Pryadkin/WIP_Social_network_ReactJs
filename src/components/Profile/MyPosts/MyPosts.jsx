import React from 'react'
import Post from '../Post/Post'

import s from './MyPosts.module.css'

const textareaValue = React.createRef();

const MyPosts = props => {
  const { profilePage, setPosts, updateNewPostText } = props;
  const posts = profilePage.posts;
  const newPostsText = profilePage.newPostsText;

  const addPost = () => {
    const value = textareaValue.current.value;
    setPosts(value);
  }

  const onPostChange= () => {
    const value = textareaValue.current.value;
    updateNewPostText(value);
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
