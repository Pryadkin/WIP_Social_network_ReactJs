import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends Component {
   componentDidMount() {
      usersAPI.auth()
         .then(data => {
            if (data.resultCode === 0) {
               const { id, email, login } = data.data;
               this.props.setAuthUserData(id, email, login);
            }
         })
   };
   render() {
      return (
         <Header />
      )
   }
}

const mapStateToProps = state => {
   return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
      email: state.auth.email,
      login: state.auth.login
   }
}


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
