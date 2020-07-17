import React from 'react'

// styles
import './Post.css';

// picture
import img from '../../../img/Avatar/avatar_1.jpg'

const Post = props => {
  const { message, liksCount } = props;

  return (
    <div className='post'>
      <img className='imgAvatar'
        src={img}
        alt="avatar" />
      {message} <br />
          Like: { liksCount}
    </div>
  )
}

export default Post;
