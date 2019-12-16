import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import s from './Profile.module.css'

const Profile = props => {
  const { state, despatch } = props;
  const profilePage = state.profilePage;

   return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage}
        despatch={despatch}
      />
    </div>
   )
}

export default Profile;
