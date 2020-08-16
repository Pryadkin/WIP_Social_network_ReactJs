import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          validate={[required]}
          component={Input}
        />
        remember me
      </div>
      <div>
        <button>
          Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = props => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);