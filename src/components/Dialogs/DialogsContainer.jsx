import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

// components
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
  return {
    state: state
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (message) => {
      dispatch(updateNewMessageBody(message));
    },
    onSendMessageClick: () => {
      dispatch(sendMessage());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
