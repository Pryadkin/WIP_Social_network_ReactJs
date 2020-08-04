import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';

// components
import Post from '../Post/Post';
import { Textarea } from '../../common/FormsControl/FormsControl';

// styles
import s from './MyPosts.module.css';

const maxLength10 = maxLengthCreator(10);

const MyPosts = props => {
  const {
    addPost,
    profilePage
  } = props;
  const posts = profilePage.posts;

  const addPostHandler = (values) => {
    addPost(values.newPostText);
  }

  const postElements = posts.map(elem => {
    const { id, liksCount, message } = elem;
    return (
      <Post
        key={id}
        message={message}
        liksCount={liksCount}
      />
    )
  })

  return (
    <div>
      <AddNewPostFormRedux onSubmit={addPostHandler} />
      {postElements}
    </div>
  )
}

const AddNewPostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='newPostText'
        component={Textarea}
        placeholder='Post message'
        validate={[required, maxLength10]}
        className={s.myPostTextarea}
        rows='4'
        cols='40'
      />
      <button
        className={s.myPostButSent}
      >
        add post
        </button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: 'profileaddNewPostForm'
})(AddNewPostForm)


export default MyPosts;
