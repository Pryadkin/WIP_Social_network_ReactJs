import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

// components
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody,
    isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (message) => {
      dispatch(updateNewMessageBody(message));
    },
    onSendMessageClick: () => {
      dispatch(sendMessage());
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
