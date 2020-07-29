import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
} from '../../redux/usersReducer';

// components
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {!this.props.isFetching
          ?
          <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followingInProgress={this.props.followingInProgress}
          />
          : <Preloader />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
})(UsersContainer);