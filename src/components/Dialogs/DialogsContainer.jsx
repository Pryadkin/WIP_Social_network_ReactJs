import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
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
      dispatch(updateNewMessageBodyCreator(message));
    },
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
