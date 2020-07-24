import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from '../../redux/usersReducer';

// components
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching();
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching();
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  };

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching();
    usersAPI.getUsers(page, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching();
        this.props.setUsers(data.items);
      })
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
  }
};


export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)