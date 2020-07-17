import React from 'react';

// styles
import s from './Friends.module.css'

const Friends = props => {
  const { state } = props;
  const friendsData = state.sitebar.friends;

  return (
    <div className={s.friends}>
      <h1>Friends</h1>

      <div className={s.friends__container}>
        {friendsData.map(friend => {
          return (
            <div className={s.friend}>
              <img src={friend.img} alt="avatar" />
              <div className={s.friend__name}>
                {friend.name}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Friends;
