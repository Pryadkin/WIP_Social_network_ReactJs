import React from 'react';
import { setPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../redux/StoreContext';

// components
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { dispatch } = store;

          const addPost = () => {
            dispatch(setPostActionCreator());
          }

          const onPostChange = (value) => {
            dispatch(updateNewPostTextActionCreator(value));
          }
          return (
            <MyPosts
              addPost={addPost}
              onPostChange={onPostChange}
              profilePage={store.getState().profilePage}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
