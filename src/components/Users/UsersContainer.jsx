import Users from './Users'
import { connect } from 'react-redux'
import {
  followAction,
  unFollowAction,
  setUsersAction,
  setCurrentPageAction,
  setTotalUsersCountAction
} from '../../redux/usersReducer'

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAction(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAction(count))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)