import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

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
            key={`page_${page}`}
            className={props.currentPage === page ? s.selectedPage : null}
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
                  <NavLink to={'/profile/' + user.id}>
                    <img
                      src={user.photos.small ? user.photos.small : userPhoto}
                      className={s.userPhoto}
                      alt='UserPhoto'
                    />
                  </NavLink>
                </div>
                <div>
                  {user.followed
                    ?
                    <button
                      disabled={props.followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        props.toggleIsFollowingProgress(true, user.id);
                        usersAPI.deleteUsers(user.id)
                          .then(data => {
                            if (data.resultCode === 0) {
                              props.unFollow(user.id);
                            }
                            props.toggleIsFollowingProgress(false, user.id);
                          })
                      }
                      }>
                      Follow
                    </button>
                    :
                    <button
                      disabled={props.followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        props.toggleIsFollowingProgress(true, user.id);
                        usersAPI.postUsers(user.id)
                          .then(data => {
                            if (data.resultCode === 0) {
                              props.follow(user.id);
                              props.toggleIsFollowingProgress(false, user.id);
                            }
                          })
                      }}>
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