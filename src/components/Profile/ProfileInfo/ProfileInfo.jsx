import React from 'react'

import './ProfileInfo.css'

import contentImg from '../../../img/header-bg.jpg'

const ProfileInfo = () => {
  return (
    <>
      <img src={contentImg} alt="contentImg"/>
      <div className='description__block'>
        ava + description
      </div>
    </>
  )
}

export default ProfileInfo;
