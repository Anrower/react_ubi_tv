import React from 'react';
import clasess from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={clasess.myInput} {...props} />
  );
});

export default MyInput;
