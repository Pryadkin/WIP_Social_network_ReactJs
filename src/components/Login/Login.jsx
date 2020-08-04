import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength20 = maxLengthCreator(20);

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={'Login'}
          name={'login'}
          validate={[required, maxLength20]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          validate={[required, maxLength20]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={'remember me'}
          type={'checkbox'}
          validate={[required, maxLength20]}
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
    console.log(formData)
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

export default Login;