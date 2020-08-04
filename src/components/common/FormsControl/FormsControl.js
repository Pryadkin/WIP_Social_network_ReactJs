import React from 'react';
import styles from './FormsControl.module.css';

const FormControl = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;

  return (
    <div className={[styles.formControl, isError ? styles.error : null].join(' ')}>
      <div>
        {props.children}
      </div>
      {isError && <span>{meta.error}</span>}
    </div>
  )
};

export const Textarea = props => {
  const { input, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
};

export const Input = (props) => {
  const { input, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
};