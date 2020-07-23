import React from 'react';

// styles
import s from './Users.module.css';

// pictures
import userPhoto from '../../img/Avatar/user-logo.png';

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  };

  return (
    <div>
      <div>
        {pages.map(page => (
          <span
            className={props.currentPage === page && s.selectedPage}
            onClick={() => { props.onPageChanged(page) }}
          >
            {page}
          </span>
        ))
        }
      </div>
      {
        props.users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div >
                  <img
                    src={user.photos.small ? user.photos.small : userPhoto}
                    className={s.userPhoto}
                    alt='UserPhoto'
                  />
                </div>
                <div>
                  {user.followed
                    ?
                    <button onClick={() => props.unFollow(user.id)}>
                      Follow
                  </button>
                    :
                    <button onClick={() => props.follow(user.id)}>
                      unFollow
                  </button>
                  }
                </div>
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
              </span>
            </div>
          )
        })
      }
    </div>
  )
};

export default Users;