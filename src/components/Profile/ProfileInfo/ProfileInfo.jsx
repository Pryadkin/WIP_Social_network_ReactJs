import React from 'react';
import './ProfileInfo.css';
import contentImg from '../../../img/header-bg.jpg';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  };

  return (
    <>
      <img src={contentImg} alt="contentImg" />
      <div className='description__block'>
        <img
          src={props.profile.photos.large}
          alt="фотография пользователя"
        />
        <div>
          {props.profile.aboutMe}
        </div>
      </div>
    </>
  )
};

export default ProfileInfo;
