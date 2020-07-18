import React from 'react';

// components
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// styles
import s from './Profile.module.css';

const Profile = () => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
