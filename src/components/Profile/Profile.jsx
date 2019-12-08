import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import s from './Profile.module.css'

const Profile = props => {   
  const { state } = props;
  const posts = state.profilePage.posts;
  
   return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts 
        posts={posts}
      />
    </div>
   )
}

export default Profile;
