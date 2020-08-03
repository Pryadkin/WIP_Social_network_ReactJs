import React from 'react';
import { Field, reduxForm } from 'redux-form';

// components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import s from './Dialogs.module.css'

const Dialogs = ({
  dialogs,
  messages,
  onSendMessageClick,
}) => {

  const dialogElements = dialogs.map(elem => {
    const { name, id } = elem;
    return (
      <DialogItem
        key={id}
        name={name}
        id={id}
      />
    )
  })

  const messageElements = messages.map(elem => {
    const { message, id } = elem;
    return (
      <Message
        key={id}
        message={message}
        id={id}
      />
    )
  })

  const addNewMessage = (value) => {
    onSendMessageClick(value.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        {dialogElements}
      </div>
      <div className={s.messages__container}>
        <div className={s.messages}>
          <div>
            {messageElements}
          </div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

const AddMessageForm = props => {
  const {
    handleSubmit
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component='textarea'
        name='newMessageBody'
        placeholder='Enter your message'
      />

      <div>
        <button
          className={s.but}
        >
          Send
        </button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
