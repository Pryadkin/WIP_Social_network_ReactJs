import React from 'react';
import './ProfileInfo.css';
// import contentImg from '../../../img/header-bg.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  };

  return (
    <>
      {/* <img src={contentImg} alt="contentImg" /> */}
      <div className='description__block'>
        <img
          src={props.profile.photos.large}
          alt="фотография пользователя"
        />
        <ProfileStatus status={'Hello'} />
        <div>
          {props.profile.aboutMe}
        </div>
      </div>
    </>
  )
};

export default ProfileInfo;
