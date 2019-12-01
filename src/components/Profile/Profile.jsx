import React from 'react'
import contentImg from '../../img/header-bg.jpg'

const Profile = () => {
   return (
    <div className="content">
      <img src={contentImg} alt="contentImg"/>
      <div>
        ava + description
      </div>
      <div>
        my post
        <div>
          New post
        </div>
      </div>
    </div>   
   )
}

export default Profile;
