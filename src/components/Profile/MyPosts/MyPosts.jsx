import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {
  const postData = [
    { id: 1, message: "hello", liksCount: 0},
    { id: 1, message: "How are you?", liksCount: 15},
    { id: 1, message: "I'm fine", liksCount: 30},
  ];

  const postElements = postData.map(elem => {
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
