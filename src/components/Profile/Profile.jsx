import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

const Profile = props => {
  // const { state, dispatch } = props;
  // const profilePage = state.profilePage;

   return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer
        // profilePage={profilePage}
        // dispatch={dispatch}
      />
    </div>
   )
}

export default Profile;
