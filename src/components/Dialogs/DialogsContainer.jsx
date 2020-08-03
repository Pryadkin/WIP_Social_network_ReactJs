import { sendMessage } from '../../redux/dialogsReducer';
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
    onSendMessageClick: (newMessageBody) => {
      dispatch(sendMessage(newMessageBody));
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
