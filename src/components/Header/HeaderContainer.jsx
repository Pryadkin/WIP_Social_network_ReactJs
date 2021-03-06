import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/authReducer';

class HeaderContainer extends Component {
   componentDidMount() {
      this.props.getAuthUserData();
   };
   render() {
      return (
         <Header {...this.props} />
      )
   }
};

const mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
      email: state.auth.email,
      login: state.auth.login
   }
};

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
