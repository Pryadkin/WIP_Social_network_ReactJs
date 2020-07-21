import React, { Component } from 'react'
import * as axios from 'axios'

// styles
import styles from './Users.module.css'

// pictures
import userPhoto from '../../img/Avatar/user-logo.png'

class Users extends Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        const data = res.data
        this.props.setUsers(data.items)
      })

  }


  render() {
    console.log(this.props)
    return <div>
      {
        this.props.users.map(user => {
          console.log(user)
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