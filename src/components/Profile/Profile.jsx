import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import s from './Profile.module.css'

const Profile = props => {
  const { state, setPosts, updateNewPostText } = props;
  const profilePage = state.profilePage;

   return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage}
        setPosts={setPosts}
        updateNewPostText={updateNewPostText}
      />
    </div>
   )
}

export default Profile;
