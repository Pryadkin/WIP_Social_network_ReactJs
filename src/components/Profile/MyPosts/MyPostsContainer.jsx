import React from 'react';
import { setPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../redux/StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      { 
      (store) => {
        const { dispatch } = store;

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
              profilePage={store.getState().profilePage}
            />
          )
        }      
      }    
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
