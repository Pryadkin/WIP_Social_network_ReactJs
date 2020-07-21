import React, { Component } from 'react'
import * as axios from 'axios'

// styles
import styles from './Users.module.css'

// pictures
import userPhoto from '../../img/Avatar/user-logo.png'

class Users extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        const data = res.data;
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
        const data = res.data;
        this.props.setUsers(data.items);
      })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div>
        {pages.map(page => (
          <span
            className={this.props.currentPage === page && styles.selectedPage}
            onClick={() => { this.onPageChanged(page) }}
          >
            {page}
          </span>
        ))
        }
      </div>
      {
        this.props.users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div >
                  <img
                    src={user.photos.small ? user.photos.small : userPhoto}
                    className={styles.userPhoto}
                    alt='UserPhoto'
                  />
                </div>
                <div>
                  {user.followed
                    ?
                    <button onClick={() => this.props.unFollow(user.id)}>
                      Follow
                  </button>
                    :
                    <button onClick={() => this.props.follow(user.id)}>
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
  }
}

export default Users