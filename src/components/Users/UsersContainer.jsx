import Users from './Users'
import { connect } from 'react-redux'
import { followAction, unFollowAction, setUsersAction } from '../../redux/usersReducer'

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAction(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAction(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAction(users))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)