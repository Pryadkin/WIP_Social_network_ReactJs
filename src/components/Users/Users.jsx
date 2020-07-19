import React from 'react'

import styles from './Users.module.css'

let Users = ({
  users,
  follow,
  unFollow,
  setUsers
}) => {

  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_932815.jpg',
        followed: true,
        fullname: 'Troy Baker',
        status: 'I am a boss',
        location: {
          city: 'Moscow',
          country: 'Russia'
        }
      },
      {
        id: 2,
        photoUrl: 'https://thumbs.dfs.ivi.ru/storage2/contents/4/c/93625135b7ba1432825b874b3cec67.jpg',
        followed: false,
        fullname: 'Willem Dafoe',
        status: 'I am a boss too',
        location: {
          city: 'Samara',
          country: 'Russia'
        }
      },
      {
        id: 3,
        photoUrl: 'https://thumbs.dfs.ivi.ru/storage2/contents/4/c/93625135b7ba1432825b874b3cec67.jpg',
        followed: true,
        fullname: 'Michael J. Fox',
        status: 'I am a boss too',
        location: {
          city: 'Moscow',
          country: 'Russia'
        }
      }
    ])
  }

  return <div>
    {
      users.map(user => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photoUrl}
                  className={styles.userPhoto}
                  alt='UserPhoto'
                />
              </div>
              <div>
                {user.followed
                  ?
                  <button onClick={() => unFollow(user.id)}>
                    Follow
                  </button>
                  :
                  <button onClick={() => follow(user.id)}>
                    unFollow
                  </button>
                }

              </div>
            </span>
            <span>
              <span>
                <div>{user.fullname}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>
            </span>
          </div>
        )
      })
    }
  </div>
}

export default Users