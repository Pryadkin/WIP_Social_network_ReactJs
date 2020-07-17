import React from 'react'

// styles
import './ProfileInfo.css'

// picture
import contentImg from '../../../img/header-bg.jpg'

const ProfileInfo = () => {
  return (
    <>
      <img src={contentImg} alt="contentImg" />
      <div className='description__block'>
        ava + description
      </div>
    </>
  )
}

export default ProfileInfo;
