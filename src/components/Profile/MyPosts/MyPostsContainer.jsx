import { setPost, updateNewPostText } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

// components
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(setPost());
    },
    onPostChange: (value) => {
      dispatch(updateNewPostText(value));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
