import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        const data = res.data;
        this.props.setUserProfile(data);
      })
  };

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
