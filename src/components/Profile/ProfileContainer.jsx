import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    };
    this.props.getUserProfile(userId)

  };

  render() {
    if (!this.props.auth) {
      return <Redirect to={'/login'} />
    }

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    auth: state.auth.isAuth
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
