import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(res => {
            if (res.data.resultCode === 0) {
               const { id, email, login } = res.data.data;
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
