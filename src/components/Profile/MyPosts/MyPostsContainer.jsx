import React from 'react';
import { setPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = props => {
  const { profilePage, dispatch } = props;

  const addPost = () => {
    const action = setPostActionCreator();
    dispatch(action);
  }

  const onPostChange= (value) => {
    const action = updateNewPostTextActionCreator(value);
    dispatch(action);
  }

  return (
    <MyPosts
      addPost={addPost}
      onPostChange={onPostChange}
      profilePage={profilePage}
    />
  )
}

export default MyPostsContainer;
