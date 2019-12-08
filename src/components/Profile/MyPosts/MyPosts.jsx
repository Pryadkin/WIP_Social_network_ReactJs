import React from 'react'
import Post from '../Post/Post'

const MyPosts = props => {
  const { posts } = props;  

  const postElements = posts.map(elem => {
    const { id, message } = elem;
    return (
      <Post
        message={ message }
        liksCount={ id }
      />
    )
  })

   return (
      <div>
        my posts
        { postElements }
      </div>
   )
}

export default MyPosts;
