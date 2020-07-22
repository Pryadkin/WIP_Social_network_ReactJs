import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import {
  followAction,
  unFollowAction,
  setUsersAction,
  setCurrentPageAction,
  setTotalUsersCountAction
} from '../../redux/usersReducer';

class UsersContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        const data = res.data;
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
        const data = res.data;
        this.props.setUsers(data.items);
      })
  };

  render() {
    return (
      <Users
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)